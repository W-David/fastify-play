import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsUpdateWithoutPostInput } from '../inputs/TagsOnPostsUpdateWithoutPostInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateWithWhereUniqueWithoutPostInput', {})
export class TagsOnPostsUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: TagsOnPostsUpdateWithoutPostInput
}
