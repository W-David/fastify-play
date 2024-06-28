import { Post } from '@typegraphql'
import { Resolver } from 'type-graphql'

@Resolver((_of) => Post)
export class PostResolver {}
