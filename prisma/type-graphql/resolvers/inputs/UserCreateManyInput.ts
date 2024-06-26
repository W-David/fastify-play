import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { Role } from '../../enums/Role'

@TypeGraphQL.InputType('UserCreateManyInput', {})
export class UserCreateManyInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  nickName?: string | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  avatar?: string | undefined

  @TypeGraphQL.Field((_type) => Role, {
    nullable: true,
  })
  role?: 'ROOT' | 'ADMIN' | 'USER' | undefined
}
