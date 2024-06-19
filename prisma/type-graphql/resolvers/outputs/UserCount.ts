import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCountPostsArgs } from './args/UserCountPostsArgs'
import { UserCountProfileArgs } from './args/UserCountProfileArgs'

@TypeGraphQL.ObjectType('UserCount', {})
export class UserCount {
  posts!: number
  profile!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'posts',
    nullable: false,
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'profile',
    nullable: false,
  })
  getProfile(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountProfileArgs): number {
    return root.profile
  }
}
