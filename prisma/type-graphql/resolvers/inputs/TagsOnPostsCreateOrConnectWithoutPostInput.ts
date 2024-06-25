import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateWithoutPostInput } from '../inputs/TagsOnPostsCreateWithoutPostInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsCreateOrConnectWithoutPostInput', {})
export class TagsOnPostsCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateWithoutPostInput, {
    nullable: false,
  })
  create!: TagsOnPostsCreateWithoutPostInput
}
