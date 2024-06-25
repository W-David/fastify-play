import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/TagCreateNestedOneWithoutTagsOnPostsInput'

@TypeGraphQL.InputType('TagsOnPostsCreateWithoutPostInput', {})
export class TagsOnPostsCreateWithoutPostInput {
  @TypeGraphQL.Field((_type) => TagCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  tag!: TagCreateNestedOneWithoutTagsOnPostsInput
}
