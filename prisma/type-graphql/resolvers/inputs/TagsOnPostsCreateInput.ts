import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/PostCreateNestedOneWithoutTagsOnPostsInput'
import { TagCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/TagCreateNestedOneWithoutTagsOnPostsInput'

@TypeGraphQL.InputType('TagsOnPostsCreateInput', {})
export class TagsOnPostsCreateInput {
  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => TagCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  tag!: TagCreateNestedOneWithoutTagsOnPostsInput
}
