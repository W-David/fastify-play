import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateWithoutTagInput } from '../inputs/TagsOnPostsCreateWithoutTagInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsCreateOrConnectWithoutTagInput', {})
export class TagsOnPostsCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateWithoutTagInput, {
    nullable: false,
  })
  create!: TagsOnPostsCreateWithoutTagInput
}
