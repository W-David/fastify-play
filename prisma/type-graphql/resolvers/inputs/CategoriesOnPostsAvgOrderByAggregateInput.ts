import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('CategoriesOnPostsAvgOrderByAggregateInput', {})
export class CategoriesOnPostsAvgOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  categoryId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdById?: 'asc' | 'desc' | undefined
}
