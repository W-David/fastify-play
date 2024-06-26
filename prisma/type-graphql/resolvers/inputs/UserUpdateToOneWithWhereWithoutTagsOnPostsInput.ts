import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserUpdateWithoutTagsOnPostsInput } from '../inputs/UserUpdateWithoutTagsOnPostsInput'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserUpdateToOneWithWhereWithoutTagsOnPostsInput', {})
export class UserUpdateToOneWithWhereWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutTagsOnPostsInput
}
