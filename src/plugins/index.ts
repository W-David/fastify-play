import fastifyPlugin from 'fastify-plugin'

import { createApolloServer } from './apollo/index.ts'
import { createAuth } from './auth/index.ts'
import { createEnv } from './env/index.ts'
import { createStaticServer } from './static/index.ts'
import { createGraphqlUpload } from './upload/index.ts'

export const apollo = fastifyPlugin(createApolloServer)
export const env = fastifyPlugin(createEnv)
export const auth = fastifyPlugin(createAuth)
export const staticServer = fastifyPlugin(createStaticServer)
export const upload = fastifyPlugin(createGraphqlUpload)
