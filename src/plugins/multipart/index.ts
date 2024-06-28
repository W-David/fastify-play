import fastifyMultipart, { FastifyMultipartBaseOptions } from '@fastify/multipart'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import { PrismaClient } from '@prisma/client'

export interface createMultipartOptions {
  prisma: PrismaClient
}

const fastifyMultipartOptions: FastifyMultipartBaseOptions = {
  limits: {
    fieldNameSize: 1000, // Max field name size in bytes
    fieldSize: 1000, // Max field value size in bytes
    fields: 100, // Max number of non-file fields
    fileSize: 1024 * 1024 * 100, // For multipart forms, the max file size in bytes
    files: 10, // Max number of file fields
    headerPairs: 2000, // Max number of header key=>value pairs
    parts: 1000, // For multipart forms, the max number of parts (fields + files)
  },
}

const createUploadHandler = (prisma: PrismaClient) => {
  const uploadHandler = async (request: FastifyRequest, reply: FastifyReply) => { 
    const pump = promisify(pipeline)
    const fileRootPath = path.resolve(__dirname, '../../../upload')
    const data = await request.file()
    if (!data) {
      const errMsg = 'No file uploaded'
      reply.code(400).send({ error: errMsg })
    } else {
    // save file to local disk
    const fileFullPath = path.join(fileRootPath, data.filename)
    const bufferData = await data.toBuffer()
    await pump(data.file, fs.createWriteStream(fileFullPath))

    // save file record to database
    const file = await prisma.file.create({
      data: {
        name: data.filename,
        path: fileFullPath,
        size: bufferData.length,
        extension: data.mimetype.split('/')[1],
      },
    })
     reply.code(200).send({ data: file})
    }
  }
  return uploadHandler
}

const createUploadsHandler = (prisma: PrismaClient) => { 
  const uploadsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    const pump = promisify(pipeline)
    const parts = request.files()
    const fileRootPath = path.resolve(__dirname, '../../../upload')
    const fileRecords = []
    for await (const part of parts) {
      await pump(part.file, fs.createWriteStream(path.join(fileRootPath, part.filename)))
      const bufferData = await part.toBuffer()
      const file = await prisma.file.create({
        data: {
          name: part.filename,
          path: path.join(fileRootPath, part.filename),
          size: bufferData.length,
          extension: part.mimetype.split('/')[1],
        },
      })
      fileRecords.push(file)
    }
    reply.code(200).send({ data: fileRecords })
  }
  return uploadsHandler
}



export async function createMultipart(fastify: FastifyInstance, options: createMultipartOptions) {

  const { prisma } = options

  await fastify.register(fastifyMultipart, fastifyMultipartOptions)

  fastify.post('/upload', createUploadHandler(prisma))
  fastify.post('/uploads', createUploadsHandler(prisma))
}
