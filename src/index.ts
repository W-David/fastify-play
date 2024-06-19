import { PrismaClient } from '@prisma/client'
import chalk from 'chalk'
import fastify from 'fastify'
import mercurius from 'mercurius'
import path from 'path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../prisma/type-graphql'

const port = 3000

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

  const app = fastify()
  const prisma = new PrismaClient()

  // app.register(fastifyStatic, {
  //   root: path.join(__dirname, '../public/apollo'),
  //   prefix: '/apollo/',
  // })

  // app.register(fastifyStatic, {
  //   root: path.join(__dirname, '../public/gql-client'),
  //   prefix: '/gql-client/',
  // })

  app.register(mercurius, {
    schema,
    graphiql: true,
    context: () => ({ prisma }),
  })

  await app.listen(port)

  console.log(`🚀  ${chalk.greenBright('Server ready at:')} ${chalk.cyanBright(`http://localhost:${port}`)}`)
  console.log(`🍕  ${chalk.greenBright('Graphiql ready at:')} ${chalk.cyanBright(`http://localhost:${port}/graphiql`)}`)
  // console.log(`🌈  ${chalk.greenBright('Sandbox ready at:')} ${chalk.cyanBright(`http://localhost:${port}/apollo/`)}`)
  // console.log(`🌈  ${chalk.greenBright('GqlClient ready at:')} ${chalk.cyanBright(`http://localhost:${port}/gql-client/`)}`)
}

main().catch(console.error)
