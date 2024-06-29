import path from 'node:path'
import fastify, { FastifyHttpOptions } from 'fastify'
import { Server } from 'http'

const fastifyHttpOptions: FastifyHttpOptions<Server> = {
  logger: {
    level: 'info',
    file: path.resolve(__dirname, '../log/loggers.log'),
  },
}

export default function createApp(options?: Record<string, any>) {
  const app = fastify(Object.assign(fastifyHttpOptions, options))
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error)
    reply.code(500).send({
      code: 500,
      data: null,
      message: error.message,
    })
  })
  return app
}
