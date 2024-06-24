import { $Enums } from '@prisma/client'

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => void
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: {
      name: string
      email: string
      role: $Enums.Role
    }
    user: {
      name: string
      email: string
      role: $Enums.Role
    }
  }
}
export {}
