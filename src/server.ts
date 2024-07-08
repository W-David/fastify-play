import 'reflect-metadata'
import chalk from 'chalk'
import { apollo, auth, decorate, env, multipart, staticServer } from './plugins'
import { EnvType } from './plugins/env'
import { PrismaClient } from '@prisma/client'
import createApp from './app'
import { genertateToken } from './plugins/auth'

const port = 3000
// 开发环境下全局变量挂载，防止热重载创建多个 prisma 实例
const prisma = globalThis.prisma || new PrismaClient()

async function main() {
  const app = createApp({ logger: false })

  await app.register(env)
  await app.register(decorate)
  await app.register(auth)
  await app.register(multipart, { prisma })
  await app.register(apollo, { prisma })
  await app.register(staticServer)

  await app.listen({ port })

  if (app.getEnvs<EnvType>().NODE_ENV === 'development') {
    // console.log(`🥯 ${chalk.greenBright('Pre generate token:')} ${chalk.blueBright(genertateToken(app))}`)
    globalThis.prisma = prisma
    console.log(`🍕 ${chalk.greenBright('Graphql ready at:')} ${chalk.cyanBright(`http://localhost:${port}/graphql`)}`)
  }
}

main().catch(console.error)
