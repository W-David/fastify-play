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
      DATABASE_URL: { type: 'string' },
      TOKEN_SECRET: { type: 'string' },
      TOKEN_EXPIRATION_TIME: { type: 'string', default: '1h' },
      ALIOSS_ACCESS_KEY_ID: { type: 'string' },
      ALIOSS_ACCESS_KEY_SECRET: { type: 'string' },
      ALIOSS_ROLE_ARN: { type: 'string' },
      ALIOSS_TOKEN_EXPIRE_TIME: { type: 'number', default: 60 * 60 },
    },
  },
}

export type EnvType = {
  NODE_ENV: string
  DATABASE_URL: string
  TOKEN_SECRET: string
  TOKEN_EXPIRATION_TIME: string
  ALIOSS_ACCESS_KEY_ID: string
  ALIOSS_ACCESS_KEY_SECRET: string
  ALIOSS_ROLE_ARN: string
  ALIOSS_TOKEN_EXPIRE_TIME: number
}

export async function createEnv(fastify: FastifyInstance, options: FastifyEnvOptions) {
  await fastify.register(fastifyEnv, Object.assign({}, defaultOptions, options))
}

// use fastify.getEnvs() to get the parsed environment variables
