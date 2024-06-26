import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsOrderByRelationAggregateInput } from '../inputs/CategoriesOnPostsOrderByRelationAggregateInput'
import { SortOrderInput } from '../inputs/SortOrderInput'
import { TagsOnPostsOrderByRelationAggregateInput } from '../inputs/TagsOnPostsOrderByRelationAggregateInput'
import { UserOrderByWithRelationInput } from '../inputs/UserOrderByWithRelationInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('PostOrderByWithRelationInput', {})
export class PostOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  title?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  description?: SortOrderInput | undefined

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  content?: SortOrderInput | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  published?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  favoNum?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  browNum?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  authorId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, {
    nullable: true,
  })
  author?: UserOrderByWithRelationInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsOrderByRelationAggregateInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsOrderByRelationAggregateInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsOrderByRelationAggregateInput | undefined
}
