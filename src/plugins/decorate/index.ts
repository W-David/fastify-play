import { FastifyInstance } from 'fastify'

export function createDecorate(fastify: FastifyInstance, options: any) {
  fastify.decorate('invalidatedTokens', new Set<string>())
}
