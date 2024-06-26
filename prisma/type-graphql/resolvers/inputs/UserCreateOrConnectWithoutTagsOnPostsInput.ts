import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserCreateWithoutTagsOnPostsInput } from '../inputs/UserCreateWithoutTagsOnPostsInput'
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput'

@TypeGraphQL.InputType('UserCreateOrConnectWithoutTagsOnPostsInput', {})
export class UserCreateOrConnectWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput

  @TypeGraphQL.Field((_type) => UserCreateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutTagsOnPostsInput
}
