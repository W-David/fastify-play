import fastifyMultipart, { FastifyMultipartBaseOptions } from '@fastify/multipart'
import { FastifyInstance } from 'fastify'

const defaultOptions: FastifyMultipartBaseOptions = {
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

export async function createMultipart(fastify: FastifyInstance, options: FastifyMultipartBaseOptions) {
  await fastify.register(fastifyMultipart, Object.assign({}, defaultOptions, options))
}
