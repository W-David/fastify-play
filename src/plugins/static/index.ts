import fastifyStatic, { FastifyStaticOptions } from '@fastify/static'
import { FastifyInstance } from 'fastify'
import path from 'path'

const defaultOptions: FastifyStaticOptions = {
  root: path.resolve(__dirname, '../../../upload'),
  prefix: '/upload',
}

export async function createStaticServer(fastify: FastifyInstance, options: FastifyStaticOptions) {
  await fastify.register(fastifyStatic, Object.assign({}, defaultOptions, options))
}
