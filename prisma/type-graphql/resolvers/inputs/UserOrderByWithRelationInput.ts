import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostOrderByRelationAggregateInput } from '../inputs/PostOrderByRelationAggregateInput'
import { SortOrderInput } from '../inputs/SortOrderInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('UserOrderByWithRelationInput', {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  nickName?: SortOrderInput | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  email?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  password?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  avatar?: SortOrderInput | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  role?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => PostOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostOrderByRelationAggregateInput | undefined
}
