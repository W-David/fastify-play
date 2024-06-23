import type { FastifyEnvOptions } from '@fastify/env'
import fastifyEnv from '@fastify/env'
import { FastifyInstance } from 'fastify'
import path from 'path'

const defaultOptions: FastifyEnvOptions = {
  dotenv: {
    path: path.join(__dirname, '../../../', '.env'),
  },
  schema: {
    type: 'object',
    properties: {
      NODE_ENV: { type: 'string' },
      PORT: { type: 'integer' },
      HOST: { type: 'string' },
    },
  },
}

export async function createEnv(fastify: FastifyInstance, options: FastifyEnvOptions) {
  await fastify.register(fastifyEnv, Object.assign({}, defaultOptions, options))
}
