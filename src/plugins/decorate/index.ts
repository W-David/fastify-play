import { FastifyInstance } from 'fastify'

export function createDecorate(fastify: FastifyInstance, options: any, done: () => void) {
  fastify.decorate('invalidatedTokens', new Set<string>())
  done()
}
