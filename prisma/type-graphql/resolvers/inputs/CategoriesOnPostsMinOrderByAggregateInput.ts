import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('CategoriesOnPostsMinOrderByAggregateInput', {})
export class CategoriesOnPostsMinOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  categoryId?: 'asc' | 'desc' | undefined
}
