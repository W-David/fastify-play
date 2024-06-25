import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateWithoutTagInput } from '../inputs/TagsOnPostsCreateWithoutTagInput'
import { TagsOnPostsUpdateWithoutTagInput } from '../inputs/TagsOnPostsUpdateWithoutTagInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpsertWithWhereUniqueWithoutTagInput', {})
export class TagsOnPostsUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateWithoutTagInput, {
    nullable: false,
  })
  update!: TagsOnPostsUpdateWithoutTagInput

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateWithoutTagInput, {
    nullable: false,
  })
  create!: TagsOnPostsCreateWithoutTagInput
}
