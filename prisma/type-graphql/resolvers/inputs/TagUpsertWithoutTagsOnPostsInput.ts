import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagCreateWithoutTagsOnPostsInput } from '../inputs/TagCreateWithoutTagsOnPostsInput'
import { TagUpdateWithoutTagsOnPostsInput } from '../inputs/TagUpdateWithoutTagsOnPostsInput'
import { TagWhereInput } from '../inputs/TagWhereInput'

@TypeGraphQL.InputType('TagUpsertWithoutTagsOnPostsInput', {})
export class TagUpsertWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => TagUpdateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  update!: TagUpdateWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => TagCreateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  create!: TagCreateWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => TagWhereInput, {
    nullable: true,
  })
  where?: TagWhereInput | undefined
}
