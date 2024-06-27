import { File } from '@typegraphql/models'
import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import { Ctx, Mutation, Resolver } from 'type-graphql'
import { Context } from './../../plugins/apollo/index'

@Resolver((_of) => File)
export class FileResolver {
  @Mutation((_returns) => File, { nullable: true })
  async uploadFile(@Ctx() { fastify, prisma, req }: Context): Promise<File | null> {
    const pump = promisify(pipeline)
    const fileRootPath = path.resolve(__dirname, '../../../upload')
    const data = await req.file()
    if (!data) {
      return null
    }
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
    return file
  }

  @Mutation((_returns) => [File], { nullable: true })
  async uploadFiles(@Ctx() { fastify, prisma, req }: Context): Promise<File[] | null> {
    const pump = promisify(pipeline)
    const parts = req.files()
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
    return fileRecords
  }
}
