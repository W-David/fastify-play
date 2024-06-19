import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import mercurius from 'mercurius'
import path from 'path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../prisma/type-graphql'

const port = 8082

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

  const app = fastify()
  const prisma = new PrismaClient()

  app.register(mercurius, {
    schema,
    graphiql: true,
    context: () => ({ prisma }),
  })

  app.listen(port).then(() => {
    console.log(`🚀 Server ready at http://localhost:${port}`)
    console.log(`🌈 Graphiql ready at http://localhost:${port}/graphiql`)
  })
}

main().catch(console.error)
