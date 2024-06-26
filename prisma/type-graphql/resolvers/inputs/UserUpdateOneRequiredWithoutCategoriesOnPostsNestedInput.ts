import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateOrConnectWithoutCategoriesOnPostsInput } from '../inputs/UserCreateOrConnectWithoutCategoriesOnPostsInput'
import { UserCreateWithoutCategoriesOnPostsInput } from '../inputs/UserCreateWithoutCategoriesOnPostsInput'
import { UserUpdateToOneWithWhereWithoutCategoriesOnPostsInput } from '../inputs/UserUpdateToOneWithWhereWithoutCategoriesOnPostsInput'
import { UserUpsertWithoutCategoriesOnPostsInput } from '../inputs/UserUpsertWithoutCategoriesOnPostsInput'
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput'

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutCategoriesOnPostsNestedInput', {})
export class UserUpdateOneRequiredWithoutCategoriesOnPostsNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => UserUpsertWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutCategoriesOnPostsInput | undefined
}
