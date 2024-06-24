import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { Role } from '../../enums/Role'

@TypeGraphQL.InputType('NestedEnumRoleFilter', {})
export class NestedEnumRoleFilter {
  @TypeGraphQL.Field((_type) => Role, {
    nullable: true,
  })
  equals?: 'ROOT' | 'ADMIN' | 'USER' | undefined;

  @TypeGraphQL.Field((_type) => [Role], {
    nullable: true,
  })
  in?: Array<'ROOT' | 'ADMIN' | 'USER'> | undefined

  @TypeGraphQL.Field((_type) => [Role], {
    nullable: true,
  })
  notIn?: Array<'ROOT' | 'ADMIN' | 'USER'> | undefined

  @TypeGraphQL.Field((_type) => NestedEnumRoleFilter, {
    nullable: true,
  })
  not?: NestedEnumRoleFilter | undefined
}
