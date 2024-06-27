import { EnvType } from '@/plugins/env'
import { File } from '@typegraphql/models'
import { STS } from 'ali-oss'
import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import { Ctx, Field, Int, Mutation, ObjectType, Query, Resolver, createUnionType } from 'type-graphql'
import { Context } from './../../plugins/apollo/index'

@ObjectType()
export class STSRes {
  @Field(() => String)
  AccesskeyId!: string
  @Field(() => String)
  AccessKeySecret!: string
  @Field(() => String)
  SecurityToken!: string
  @Field(() => String)
  Expiration!: string
}

@ObjectType('AffectedRowsOutput', {})
export class AffectedRowsOutput {
  @Field((_type) => Int, {
    nullable: false,
  })
  count!: number
}

export const UploadResUnion = createUnionType({
  name: 'UploadResUnion',
  types: () => [File, AffectedRowsOutput] as const,
  resolveType: (value) => {
    if (value instanceof File) {
      return File
    }
    if (value instanceof AffectedRowsOutput) {
      return AffectedRowsOutput
    }
    return undefined
  },
})

@Resolver()
export class AliOSSResolver {
  @Query((_returns) => STSRes, { nullable: true })
  async sts(@Ctx() { fastify }: Context): Promise<STSRes | null> {
    const { ALIOSS_ACCESS_KEY_ID, ALIOSS_ACCESS_KEY_SECRET, ALIOSS_ROLE_ARN, ALIOSS_TOKEN_EXPIRE_TIME } = fastify.getEnvs<EnvType>()
    const client = new STS({
      accessKeyId: ALIOSS_ACCESS_KEY_ID,
      accessKeySecret: ALIOSS_ACCESS_KEY_SECRET,
    })
    const { credentials } = await client.assumeRole(ALIOSS_ROLE_ARN, undefined, ALIOSS_TOKEN_EXPIRE_TIME)
    return {
      AccesskeyId: credentials.AccessKeyId,
      AccessKeySecret: credentials.AccessKeySecret,
      SecurityToken: credentials.SecurityToken,
      Expiration: credentials.Expiration,
    }
  }

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
