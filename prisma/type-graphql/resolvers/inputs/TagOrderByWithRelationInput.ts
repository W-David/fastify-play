import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsOrderByRelationAggregateInput } from '../inputs/TagsOnPostsOrderByRelationAggregateInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('TagOrderByWithRelationInput', {})
export class TagOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsOrderByRelationAggregateInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsOrderByRelationAggregateInput | undefined
}
