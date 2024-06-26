import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.InputType('TagsOnPostsCreateManyCreatedByInput', {})
export class TagsOnPostsCreateManyCreatedByInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  postId!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  tagId!: number

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined
}
