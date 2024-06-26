import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateWithoutCategoriesOnPostsInput } from '../inputs/UserCreateWithoutCategoriesOnPostsInput'
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput'

@TypeGraphQL.InputType('UserCreateOrConnectWithoutCategoriesOnPostsInput', {})
export class UserCreateOrConnectWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput

  @TypeGraphQL.Field((_type) => UserCreateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCategoriesOnPostsInput
}
