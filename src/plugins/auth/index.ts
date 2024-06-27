import fastifyAuth from '@fastify/auth'
import fastifyJwt from '@fastify/jwt'
import { $Enums } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import { EnvType } from '../env'

export interface AuthOptions {
  [key: string]: string
}

export interface AuthBody {
  name: string
  email: string
  password: string
  role: $Enums.Role
}

export async function createAuth(fastify: FastifyInstance, options: AuthOptions) {
  const { TOKEN_SECRET } = fastify.getEnvs<EnvType>()
  await fastify.register(fastifyJwt, Object.assign({}, { secret: TOKEN_SECRET }, options))

  await fastify
    .decorate('authenticate', (request, reply, done) => {
      if (request.url === '/graphql' && request.method === 'GET') {
        done()
      } else {
        request
          .jwtVerify()
          .then(() => done())
          .catch((err: Error) => done(err))
      }
    })
    .register(fastifyAuth)
}
