import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateWithoutCategoriesOnPostsInput } from '../inputs/UserCreateWithoutCategoriesOnPostsInput'
import { UserUpdateWithoutCategoriesOnPostsInput } from '../inputs/UserUpdateWithoutCategoriesOnPostsInput'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserUpsertWithoutCategoriesOnPostsInput', {})
export class UserUpsertWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => UserCreateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined
}
