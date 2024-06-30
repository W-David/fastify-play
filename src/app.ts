import path from 'node:path'
import fastify, { FastifyBaseLogger, FastifyHttpOptions } from 'fastify'
import { Server } from 'http'

const fastifyHttpOptions: FastifyHttpOptions<Server, FastifyBaseLogger> = {
  logger: {
    level: 'info',
    redact: ['req.headers.authorization'],
    file: path.resolve(__dirname, '../log/loggers.log'),
    serializers: {
      req: (req) => ({
        method: req.method,
        url: req.url,
        parameters: req.params,
        headers: req.headers,
      }),
      res: (reply) => ({
        statusCode: reply.statusCode,
      }),
    },
  },
}

export default function createApp(options?: typeof fastifyHttpOptions) {
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
