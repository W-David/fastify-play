import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsAvgOrderByAggregateInput } from '../inputs/CategoriesOnPostsAvgOrderByAggregateInput'
import { CategoriesOnPostsCountOrderByAggregateInput } from '../inputs/CategoriesOnPostsCountOrderByAggregateInput'
import { CategoriesOnPostsMaxOrderByAggregateInput } from '../inputs/CategoriesOnPostsMaxOrderByAggregateInput'
import { CategoriesOnPostsMinOrderByAggregateInput } from '../inputs/CategoriesOnPostsMinOrderByAggregateInput'
import { CategoriesOnPostsSumOrderByAggregateInput } from '../inputs/CategoriesOnPostsSumOrderByAggregateInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('CategoriesOnPostsOrderByWithAggregationInput', {})
export class CategoriesOnPostsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: CategoriesOnPostsCountOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: CategoriesOnPostsAvgOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: CategoriesOnPostsMaxOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: CategoriesOnPostsMinOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: CategoriesOnPostsSumOrderByAggregateInput | undefined
}
