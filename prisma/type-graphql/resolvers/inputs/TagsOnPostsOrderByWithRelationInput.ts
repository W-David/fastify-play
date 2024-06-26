import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostOrderByWithRelationInput } from '../inputs/PostOrderByWithRelationInput'
import { TagOrderByWithRelationInput } from '../inputs/TagOrderByWithRelationInput'
import { UserOrderByWithRelationInput } from '../inputs/UserOrderByWithRelationInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('TagsOnPostsOrderByWithRelationInput', {})
export class TagsOnPostsOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => PostOrderByWithRelationInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationInput | undefined

  @TypeGraphQL.Field((_type) => TagOrderByWithRelationInput, {
    nullable: true,
  })
  tag?: TagOrderByWithRelationInput | undefined

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, {
    nullable: true,
  })
  createdBy?: UserOrderByWithRelationInput | undefined
}