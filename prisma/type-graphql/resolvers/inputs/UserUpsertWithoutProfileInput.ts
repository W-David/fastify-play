import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateWithoutProfileInput } from '../inputs/UserCreateWithoutProfileInput'
import { UserUpdateWithoutProfileInput } from '../inputs/UserUpdateWithoutProfileInput'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserUpsertWithoutProfileInput', {})
export class UserUpsertWithoutProfileInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutProfileInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutProfileInput

  @TypeGraphQL.Field((_type) => UserCreateWithoutProfileInput, {
    nullable: false,
  })
  create!: UserCreateWithoutProfileInput

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined
}
