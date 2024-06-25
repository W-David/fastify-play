import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/PostCreateNestedOneWithoutTagsOnPostsInput'

@TypeGraphQL.InputType('TagsOnPostsCreateWithoutTagInput', {})
export class TagsOnPostsCreateWithoutTagInput {
  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutTagsOnPostsInput
}
