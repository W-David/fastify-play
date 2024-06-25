import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagCountTagsOnPostsArgs } from './args/TagCountTagsOnPostsArgs'

@TypeGraphQL.ObjectType('TagCount', {})
export class TagCount {
  TagsOnPosts!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'TagsOnPosts',
    nullable: false,
  })
  getTagsOnPosts(@TypeGraphQL.Root() root: TagCount, @TypeGraphQL.Args() args: TagCountTagsOnPostsArgs): number {
    return root.TagsOnPosts
  }
}
