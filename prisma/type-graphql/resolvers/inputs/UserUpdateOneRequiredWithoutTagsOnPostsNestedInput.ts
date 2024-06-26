import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateOrConnectWithoutTagsOnPostsInput } from '../inputs/UserCreateOrConnectWithoutTagsOnPostsInput'
import { UserCreateWithoutTagsOnPostsInput } from '../inputs/UserCreateWithoutTagsOnPostsInput'
import { UserUpdateToOneWithWhereWithoutTagsOnPostsInput } from '../inputs/UserUpdateToOneWithWhereWithoutTagsOnPostsInput'
import { UserUpsertWithoutTagsOnPostsInput } from '../inputs/UserUpsertWithoutTagsOnPostsInput'
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput'

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutTagsOnPostsNestedInput', {})
export class UserUpdateOneRequiredWithoutTagsOnPostsNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutTagsOnPostsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutTagsOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => UserUpsertWithoutTagsOnPostsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutTagsOnPostsInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutTagsOnPostsInput | undefined
}