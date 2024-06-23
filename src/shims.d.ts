declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => void
  }
}
export {}
