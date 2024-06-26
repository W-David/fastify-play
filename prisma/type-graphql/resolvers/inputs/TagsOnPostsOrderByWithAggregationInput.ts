import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsAvgOrderByAggregateInput } from '../inputs/TagsOnPostsAvgOrderByAggregateInput'
import { TagsOnPostsCountOrderByAggregateInput } from '../inputs/TagsOnPostsCountOrderByAggregateInput'
import { TagsOnPostsMaxOrderByAggregateInput } from '../inputs/TagsOnPostsMaxOrderByAggregateInput'
import { TagsOnPostsMinOrderByAggregateInput } from '../inputs/TagsOnPostsMinOrderByAggregateInput'
import { TagsOnPostsSumOrderByAggregateInput } from '../inputs/TagsOnPostsSumOrderByAggregateInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('TagsOnPostsOrderByWithAggregationInput', {})
export class TagsOnPostsOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  tagId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdById?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: TagsOnPostsCountOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: TagsOnPostsAvgOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: TagsOnPostsMaxOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: TagsOnPostsMinOrderByAggregateInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: TagsOnPostsSumOrderByAggregateInput | undefined
}
