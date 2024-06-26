import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.InputType('TagsOnPostsCreateManyPostInput', {})
export class TagsOnPostsCreateManyPostInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  tagId!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  createdById!: number

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined
}
