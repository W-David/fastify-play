import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsUpdateWithoutCreatedByInput } from '../inputs/TagsOnPostsUpdateWithoutCreatedByInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateWithWhereUniqueWithoutCreatedByInput', {})
export class TagsOnPostsUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateWithoutCreatedByInput, {
    nullable: false,
  })
  data!: TagsOnPostsUpdateWithoutCreatedByInput
}
