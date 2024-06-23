import fastifyPlugin from 'fastify-plugin'

import { createApolloServer } from './apollo'
import { createAuth } from './auth'
import { createEnv } from './env'

export const apollo = fastifyPlugin(createApolloServer)
export const env = fastifyPlugin(createEnv)
export const auth = fastifyPlugin(createAuth)
