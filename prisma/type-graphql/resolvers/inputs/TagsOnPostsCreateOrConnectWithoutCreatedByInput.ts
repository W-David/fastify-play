import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateWithoutCreatedByInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsCreateOrConnectWithoutCreatedByInput', {})
export class TagsOnPostsCreateOrConnectWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateWithoutCreatedByInput, {
    nullable: false,
  })
  create!: TagsOnPostsCreateWithoutCreatedByInput
}
