import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.ObjectType('CategoriesOnPostsAvgAggregate', {})
export class CategoriesOnPostsAvgAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  postId!: number | null

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  categoryId!: number | null
}
