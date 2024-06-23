import { ApolloServer } from '@apollo/server'
import { ApolloFastifyContextFunction, fastifyApolloDrainPlugin, fastifyApolloHandler } from '@as-integrations/fastify'
import { UserType } from '@fastify/jwt'
import { PrismaClient } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../../../prisma/type-graphql'

export interface Context {
  user: UserType
  prisma: PrismaClient
}

export interface createApolloServerOptions {
  [key: string]: string
}

export async function createApolloServer(fastify: FastifyInstance, options: createApolloServerOptions) {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

  const prisma = new PrismaClient()

  const apollo = new ApolloServer<Context>({
    schema,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  })

  const apolloContext: ApolloFastifyContextFunction<Context> = async (req, reply) => {
    return new Promise((resolve) => resolve({ user: req.user, prisma }))
  }

  await apollo.start()

  fastify.route({
    method: ['POST', 'OPTIONS', 'GET'],
    url: '/graphql',
    onRequest: fastify.auth([fastify.authenticate]),
    handler: fastifyApolloHandler(apollo, {
      context: apolloContext,
    }),
  })
}
