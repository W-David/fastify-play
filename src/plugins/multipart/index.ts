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
      return {
        code: 500,
        data: null,
        message: errMsg,
      }
    } else {
      // save file to local disk
      try {
        const fileFullPath = path.join(fileRootPath, data.filename)
        await pump(data.file, fs.createWriteStream(fileFullPath))

        // save file record to database
        const file = await prisma.file.create({
          data: {
            name: data.filename,
            path: fileFullPath,
            urlPath: `/upload/${data.filename}`,
            extension: data.mimetype.split('/')[1],
          },
        })
        return {
          code: 200,
          data: file,
          message: null,
        }
      } catch (error) {
        throw error
      }
    }
  }
  return uploadHandler
}

const createUploadsHandler = (prisma: PrismaClient) => {
  const uploadsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const pump = promisify(pipeline)
      const parts = request.files()
      const fileRootPath = path.resolve(__dirname, '../../../upload')
      const fileRecords = []
      for await (const part of parts) {
        await pump(part.file, fs.createWriteStream(path.join(fileRootPath, part.filename)))
        const file = await prisma.file.create({
          data: {
            name: part.filename,
            path: path.join(fileRootPath, part.filename),
            urlPath: `/upload/${part.filename}`,
            extension: part.mimetype.split('/')[1],
          },
        })
        fileRecords.push(file)
      }
      return {
        code: 200,
        data: fileRecords,
        message: null,
      }
    } catch (error) {
      throw error
    }
  }
  return uploadsHandler
}

export async function createMultipart(fastify: FastifyInstance, options: createMultipartOptions) {
  const { prisma } = options

  await fastify.register(fastifyMultipart, fastifyMultipartOptions)

  fastify.route({
    method: ['POST'],
    url: '/upload',
    // onRequest: fastify.auth([fastify.authenticate]),
    handler: createUploadHandler(prisma),
  })

  fastify.route({
    method: ['POST'],
    url: '/uploads',
    // onRequest: fastify.auth([fastify.authenticate]),
    handler: createUploadsHandler(prisma),
  })
}
