import 'reflect-metadata'
import { EnvType } from '@/plugins/env/index.ts'
import { apollo, auth, env, staticServer, upload } from '@/plugins/index.ts'
import chalk from 'chalk'
import fastify from 'fastify'

const port = 3000

async function main() {
  const app = fastify()

  await app.register(env)
  await app.register(auth)
  await app.register(apollo)
  await app.register(staticServer)
  await app.register(upload)

  await app.listen({ port })

  if (app.getEnvs<EnvType>().NODE_ENV === 'development') {
    // console.log(`🥯 ${chalk.greenBright('Pre generate token:')} ${chalk.blueBright(preGenertateToken(app))}`)
    console.log(`🍕 ${chalk.greenBright('Graphql ready at:')} ${chalk.cyanBright(`http://localhost:${port}/graphql`)}`)
  }
}

main().catch(console.error)
