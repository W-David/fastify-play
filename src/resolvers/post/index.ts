import Models from '@typegraphql/models/index.ts'
import { Resolver } from 'type-graphql'

@Resolver((_of) => Models.Post)
export class PostResolver {}
