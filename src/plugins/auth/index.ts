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
  fastify.post('/auth', async (request, reply) => {
    const payload = request.body as AuthBody
    const token = fastify.jwt.sign({
      name: payload.name,
      email: payload.email,
      role: payload.role,
    })
    reply.code(200).send({ token })
  })

  fastify.post('/decode', async (request, reply) => {
    const hasAuthorizationHeader = request.headers.authorization !== undefined
    if (hasAuthorizationHeader) {
      const token = request.headers.authorization!.split(' ')[1]
      reply.send(fastify.jwt.decode(token))
    } else {
      reply.send(new Error('Authorization header is missing'))
    }
  })

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
