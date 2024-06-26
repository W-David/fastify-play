import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.InputType('TagsOnPostsCreateManyInput', {})
export class TagsOnPostsCreateManyInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  postId!: number

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
