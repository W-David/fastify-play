import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagUpdateWithoutTagsOnPostsInput } from '../inputs/TagUpdateWithoutTagsOnPostsInput'
import { TagWhereInput } from '../inputs/TagWhereInput'

@TypeGraphQL.InputType('TagUpdateToOneWithWhereWithoutTagsOnPostsInput', {})
export class TagUpdateToOneWithWhereWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => TagWhereInput, {
    nullable: true,
  })
  where?: TagWhereInput | undefined

  @TypeGraphQL.Field((_type) => TagUpdateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  data!: TagUpdateWithoutTagsOnPostsInput
}
