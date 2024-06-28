import 'reflect-metadata'
import chalk from 'chalk'
import fastify from 'fastify'
import { apollo, auth, env, multipart, staticServer } from './plugins'
import { EnvType } from './plugins/env'
import { PrismaClient } from '@prisma/client'
// import { preGenertateToken } from './plugins/auth'

const port = 3000

async function main() {
  const app = fastify()
  const prisma = new PrismaClient()

  await app.register(env)
  await app.register(auth)
  await app.register(multipart, { prisma })
  await app.register(apollo, { prisma })
  await app.register(staticServer)

  await app.listen({ port })

  if (app.getEnvs<EnvType>().NODE_ENV === 'development') {
    // console.log(`🥯 ${chalk.greenBright('Pre generate token:')} ${chalk.blueBright(preGenertateToken(app))}`)
    console.log(`🍕 ${chalk.greenBright('Graphql ready at:')} ${chalk.cyanBright(`http://localhost:${port}/graphql`)}`)
  }
}

main().catch(console.error)
