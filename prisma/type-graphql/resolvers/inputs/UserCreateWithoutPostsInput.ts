import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileCreateNestedManyWithoutUserInput } from '../inputs/ProfileCreateNestedManyWithoutUserInput'

@TypeGraphQL.InputType('UserCreateWithoutPostsInput', {})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string

  @TypeGraphQL.Field((_type) => ProfileCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileCreateNestedManyWithoutUserInput | undefined
}
