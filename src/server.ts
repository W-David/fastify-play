import chalk from 'chalk'
import fastify from 'fastify'
import 'reflect-metadata'
import { apollo, auth, env } from './plugins'

const port = 3000

async function main() {
  const app = fastify()

  await app.register(env)
  await app.register(auth)
  await app.register(apollo)

  await app.listen({ port })

  console.log(`🍕  ${chalk.greenBright('Graphql ready at:')} ${chalk.cyanBright(`http://localhost:${port}/graphql`)}`)
}

main().catch(console.error)
