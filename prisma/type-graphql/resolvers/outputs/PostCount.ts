import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCountCategoriesOnPostsArgs } from './args/PostCountCategoriesOnPostsArgs'
import { PostCountTagsOnPostsArgs } from './args/PostCountTagsOnPostsArgs'

@TypeGraphQL.ObjectType('PostCount', {})
export class PostCount {
  CategoriesOnPosts!: number
  TagsOnPosts!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'CategoriesOnPosts',
    nullable: false,
  })
  getCategoriesOnPosts(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCategoriesOnPostsArgs): number {
    return root.CategoriesOnPosts
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'TagsOnPosts',
    nullable: false,
  })
  getTagsOnPosts(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountTagsOnPostsArgs): number {
    return root.TagsOnPosts
  }
}
