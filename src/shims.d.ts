import { $Enums, PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => void
    invalidatedTokens: Set<string>
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: {
      name?: string
      email: string
      role: $Enums.Role
    }
    user: {
      name?: string
      email: string
      role: $Enums.Role
    }
  }
}
export {}
