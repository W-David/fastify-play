import { Post } from '@typegraphql/models'
import { Resolver } from 'type-graphql'

@Resolver((_of) => Post)
export class PostResolver {}
