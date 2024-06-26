import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateWithoutTagsOnPostsInput } from '../inputs/UserCreateWithoutTagsOnPostsInput'
import { UserUpdateWithoutTagsOnPostsInput } from '../inputs/UserUpdateWithoutTagsOnPostsInput'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserUpsertWithoutTagsOnPostsInput', {})
export class UserUpsertWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => UserCreateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined
}
