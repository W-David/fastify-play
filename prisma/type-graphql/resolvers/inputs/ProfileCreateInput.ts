import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateNestedOneWithoutProfileInput } from '../inputs/UserCreateNestedOneWithoutProfileInput'

@TypeGraphQL.InputType('ProfileCreateInput', {})
export class ProfileCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  bio?: string | undefined

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutProfileInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutProfileInput
}
