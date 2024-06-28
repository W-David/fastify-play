import { Context } from '@/plugins/apollo/index.ts'
import Models from '@typegraphql/models/index.ts'
import Upload from 'graphql-upload/Upload.mjs'
import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import { Args, Ctx, Mutation, Resolver } from 'type-graphql'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

@Resolver((_of) => Models.File)
export class FileResolver {
  @Mutation((_returns) => Models.File, { nullable: true })
  async uploadFile(@Ctx() { prisma }: Context, @Args() { promise }: Upload): Promise<Models.File | null> {
    if (!promise) {
      return null
    }
    const { createReadStream, filename, mimetype, encoding } = await promise
    const pump = promisify(pipeline)
    const fileRootPath = path.resolve(__dirname, '../../../upload')
    // save file to local disk
    const fileFullPath = path.join(fileRootPath, filename)
    await pump(createReadStream({ encoding: encoding as BufferEncoding }), fs.createWriteStream(fileFullPath))

    // save file record to database
    const createdFile = await prisma.file.create({
      data: {
        name: filename,
        path: fileFullPath,
        size: 0,
        extension: mimetype.split('/')[1],
      },
    })
    return createdFile
  }

  @Mutation((_returns) => [Models.File], { nullable: true })
  async uploadFiles(@Ctx() { fastify, prisma, req }: Context, @Args() uploads: Upload[]): Promise<Models.File[] | null> {
    if (!uploads || uploads.length === 0) {
      return null
    }
    const pump = promisify(pipeline)
    const fileRootPath = path.resolve(__dirname, '../../../upload')
    const fileRecords = []
    const promises = uploads.map((upload) => upload.promise)
    for await (const promise of promises) {
      const { createReadStream, filename, mimetype, encoding } = promise
      await pump(createReadStream({ encoding: encoding as BufferEncoding }), fs.createWriteStream(path.join(fileRootPath, filename)))
      const file = await prisma.file.create({
        data: {
          name: filename,
          path: path.join(fileRootPath, filename),
          size: 0,
          extension: mimetype.split('/')[1],
        },
      })
      fileRecords.push(file)
    }
    return fileRecords
  }
}
