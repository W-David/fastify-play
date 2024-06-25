import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsScalarWhereInput } from '../inputs/TagsOnPostsScalarWhereInput'
import { TagsOnPostsUpdateManyMutationInput } from '../inputs/TagsOnPostsUpdateManyMutationInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateManyWithWhereWithoutTagInput', {})
export class TagsOnPostsUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsScalarWhereInput, {
    nullable: false,
  })
  where!: TagsOnPostsScalarWhereInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TagsOnPostsUpdateManyMutationInput
}
