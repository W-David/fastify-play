import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.ObjectType('CategoriesOnPostsSumAggregate', {})
export class CategoriesOnPostsSumAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  postId!: number | null

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  categoryId!: number | null
}
