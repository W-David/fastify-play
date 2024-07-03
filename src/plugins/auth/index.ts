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

export function genertateToken(fastify: FastifyInstance) {
  const { TOKEN_EXPIRATION_TIME } = fastify.getEnvs<EnvType>()
  const token = fastify.jwt.sign(
    {
      name: 'root',
      email: 'root@root.com',
      role: $Enums.Role.ROOT,
    },
    {
      expiresIn: TOKEN_EXPIRATION_TIME,
    },
  )
  return token
}

export async function createAuth(fastify: FastifyInstance, options: AuthOptions) {
  const { TOKEN_SECRET } = fastify.getEnvs<EnvType>()
  await fastify.register(fastifyJwt, Object.assign({}, { secret: TOKEN_SECRET }, options))

  await fastify
    .decorate('authenticate', (request, reply, done) => {
      const token = request.headers.authorization?.split(' ')[1]
      if (token && fastify.invalidatedTokens.has(token)) {
        done(new Error('token has been invalidated'))
      } else {
        request
          .jwtVerify()
          .then(() => done())
          .catch((err: Error) => done(err))
      }
    })
    .register(fastifyAuth)
}
