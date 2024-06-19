import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserUpdateWithoutProfileInput } from '../inputs/UserUpdateWithoutProfileInput'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserUpdateToOneWithWhereWithoutProfileInput', {})
export class UserUpdateToOneWithWhereWithoutProfileInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateWithoutProfileInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutProfileInput
}
