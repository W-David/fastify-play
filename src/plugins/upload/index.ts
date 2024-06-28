import { FastifyInstance } from 'fastify'
import processRequest from 'graphql-upload/processRequest.mjs'

export function createGraphqlUpload(fastify: FastifyInstance, options: any) {
  fastify.addContentTypeParser('multipart', (request, payload, done) => {
    request.isMultipart = true
    done(null, request.body)
  })
  fastify.addHook('preValidation', async (request, reply) => {
    if (!request.isMultipart) {
      return
    }

    request.body = await processRequest(request.raw, reply.raw)
  })
}
