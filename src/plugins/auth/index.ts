import fastifyAuth from '@fastify/auth'
import fastifyJwt, { FastifyJWTOptions } from '@fastify/jwt'
import { $Enums } from '@prisma/client'
import { FastifyInstance } from 'fastify'

export interface AuthOptions {
  [key: string]: string
}

export interface AuthBody {
  name: string
  email: string
  password: string
  role: $Enums.Role
}

const defaultOptions: AuthOptions & FastifyJWTOptions = {
  secret: 'fastify-secret',
}

export async function createAuth(fastify: FastifyInstance, options: AuthOptions) {
  await fastify.register(fastifyJwt, Object.assign({}, defaultOptions, options))

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
