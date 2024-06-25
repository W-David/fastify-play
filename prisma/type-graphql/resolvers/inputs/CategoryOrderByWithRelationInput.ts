import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsOrderByRelationAggregateInput } from '../inputs/CategoriesOnPostsOrderByRelationAggregateInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('CategoryOrderByWithRelationInput', {})
export class CategoryOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsOrderByRelationAggregateInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsOrderByRelationAggregateInput | undefined
}
