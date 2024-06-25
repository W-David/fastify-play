import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateNestedManyWithoutTagInput } from '../inputs/TagsOnPostsCreateNestedManyWithoutTagInput'

@TypeGraphQL.InputType('TagCreateInput', {})
export class TagCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateNestedManyWithoutTagInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsCreateNestedManyWithoutTagInput | undefined
}
