import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCountCategoriesOnPostsArgs } from './args/UserCountCategoriesOnPostsArgs'
import { UserCountPostsArgs } from './args/UserCountPostsArgs'
import { UserCountTagsOnPostsArgs } from './args/UserCountTagsOnPostsArgs'

@TypeGraphQL.ObjectType('UserCount', {})
export class UserCount {
  posts!: number
  CategoriesOnPosts!: number
  TagsOnPosts!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'posts',
    nullable: false,
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'CategoriesOnPosts',
    nullable: false,
  })
  getCategoriesOnPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCategoriesOnPostsArgs): number {
    return root.CategoriesOnPosts
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'TagsOnPosts',
    nullable: false,
  })
  getTagsOnPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountTagsOnPostsArgs): number {
    return root.TagsOnPosts
  }
}
