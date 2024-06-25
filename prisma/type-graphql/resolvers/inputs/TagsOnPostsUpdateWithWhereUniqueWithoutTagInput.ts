import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsUpdateWithoutTagInput } from '../inputs/TagsOnPostsUpdateWithoutTagInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateWithWhereUniqueWithoutTagInput', {})
export class TagsOnPostsUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateWithoutTagInput, {
    nullable: false,
  })
  data!: TagsOnPostsUpdateWithoutTagInput
}
