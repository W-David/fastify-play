import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateWithoutCreatedByInput'
import { TagsOnPostsUpdateWithoutCreatedByInput } from '../inputs/TagsOnPostsUpdateWithoutCreatedByInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpsertWithWhereUniqueWithoutCreatedByInput', {})
export class TagsOnPostsUpsertWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateWithoutCreatedByInput, {
    nullable: false,
  })
  update!: TagsOnPostsUpdateWithoutCreatedByInput

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateWithoutCreatedByInput, {
    nullable: false,
  })
  create!: TagsOnPostsCreateWithoutCreatedByInput
}
