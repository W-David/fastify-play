import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { SortOrderInput } from '../inputs/SortOrderInput'
import { UserOrderByWithRelationInput } from '../inputs/UserOrderByWithRelationInput'
import { SortOrder } from '../../enums/SortOrder'

@TypeGraphQL.InputType('ProfileOrderByWithRelationInput', {})
export class ProfileOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  bio?: SortOrderInput | undefined

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: 'asc' | 'desc' | undefined

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationInput | undefined
}
