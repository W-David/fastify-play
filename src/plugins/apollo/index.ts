import { authChecker } from '@/plugins/auth/authChecker.ts'
import { ApolloServer } from '@apollo/server'
import { ApolloFastifyContextFunction, fastifyApolloDrainPlugin, fastifyApolloHandler } from '@as-integrations/fastify'
import { UserType } from '@fastify/jwt'
import { PrismaClient } from '@prisma/client'
import Enhance from '@typegraphql/enhance.ts'
import TypegraphqlModule from '@typegraphql/index.ts'
import { FastifyInstance, FastifyRequest } from 'fastify'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs'
import Upload from 'graphql-upload/Upload.mjs'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { resolvers } from '@/resolvers/index.ts'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))


export interface Context {
  req: FastifyRequest
  user: UserType
  prisma: PrismaClient
  fastify: FastifyInstance
}

export interface createApolloServerOptions {
  [key: string]: string
}

export async function createApolloServer(fastify: FastifyInstance, options: createApolloServerOptions) {
  

  // const resolversEnhanceMap: Enhance.ResolversEnhanceMap = {}

  // Enhance.applyResolversEnhanceMap(resolversEnhanceMap)

  const schema = await buildSchema({
    // resolvers: [...TypegraphqlModule.resolvers, ...resolvers],
    resolvers: [...resolvers],
    scalarsMap: [{ type: Upload, scalar: GraphQLUpload }],
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    authChecker,
    validate: false,
  })

  const prisma = new PrismaClient()

  const apollo = new ApolloServer<Context>({
    schema,
    csrfPrevention: true,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  })

  const apolloContext: ApolloFastifyContextFunction<Context> = async (req, reply) => {
    return new Promise((resolve) => resolve({ req, user: req.user, prisma, fastify }))
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
