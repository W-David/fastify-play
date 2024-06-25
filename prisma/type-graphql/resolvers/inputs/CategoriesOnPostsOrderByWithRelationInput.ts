import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryOrderByWithRelationInput } from '../inputs/CategoryOrderByWithRelationInput'
import { PostOrderByWithRelationInput } from '../inputs/PostOrderByWithRelationInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('CategoriesOnPostsOrderByWithRelationInput', {})
export class CategoriesOnPostsOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  categoryId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => PostOrderByWithRelationInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationInput | undefined

  @TypeGraphQL.Field((_type) => CategoryOrderByWithRelationInput, {
    nullable: true,
  })
  category?: CategoryOrderByWithRelationInput | undefined
}
