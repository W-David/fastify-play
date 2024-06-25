import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagCreateWithoutTagsOnPostsInput } from '../inputs/TagCreateWithoutTagsOnPostsInput'
import { TagWhereUniqueInput } from '../inputs/TagWhereUniqueInput'

@TypeGraphQL.InputType('TagCreateOrConnectWithoutTagsOnPostsInput', {})
export class TagCreateOrConnectWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => TagWhereUniqueInput, {
    nullable: false,
  })
  where!: TagWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagCreateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  create!: TagCreateWithoutTagsOnPostsInput
}
