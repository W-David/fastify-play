import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/PostCreateNestedOneWithoutTagsOnPostsInput'
import { TagCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/TagCreateNestedOneWithoutTagsOnPostsInput'
import { UserCreateNestedOneWithoutTagsOnPostsInput } from '../inputs/UserCreateNestedOneWithoutTagsOnPostsInput'

@TypeGraphQL.InputType('TagsOnPostsCreateInput', {})
export class TagsOnPostsCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => TagCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  tag!: TagCreateNestedOneWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutTagsOnPostsInput, {
    nullable: false,
  })
  createdBy!: UserCreateNestedOneWithoutTagsOnPostsInput
}
