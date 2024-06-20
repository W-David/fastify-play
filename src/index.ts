import { ApolloServer } from '@apollo/server'
import fastifyApollo, { ApolloFastifyContextFunction, fastifyApolloDrainPlugin } from '@as-integrations/fastify'
import { PrismaClient } from '@prisma/client'
import chalk from 'chalk'
import fastify from 'fastify'
import path from 'path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../prisma/type-graphql'

const port = 3000
const graphqlPath = '/graphql'

export interface Context {
  prisma: PrismaClient
}

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

  const app = fastify()
  const prisma = new PrismaClient()

  const apollo = new ApolloServer<Context>({
    schema,
    plugins: [fastifyApolloDrainPlugin(app)],
  })

  const apolloContext: ApolloFastifyContextFunction<Context> = async (req) => {
    return new Promise((resolve) => resolve({ prisma }))
  }

  await apollo.start()

  await app.register(fastifyApollo(apollo), {
    context: apolloContext,
  })

  // app.register(mercurius, {
  //   schema,
  //   graphiql: true,
  //   context: () => ({ prisma }),
  // })

  await app.listen({ port })

  console.log(`🍕  ${chalk.greenBright('Graphql ready at:')} ${chalk.cyanBright(`http://localhost:${port}${graphqlPath}`)}`)
  // console.log(`🌈  ${chalk.greenBright('Sandbox ready at:')} ${chalk.cyanBright(`http://localhost:${port}/graphiql`)}`)
}

main().catch(console.error)
