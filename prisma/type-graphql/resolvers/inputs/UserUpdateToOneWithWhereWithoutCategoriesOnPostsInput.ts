import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { UserUpdateWithoutCategoriesOnPostsInput } from '../inputs/UserUpdateWithoutCategoriesOnPostsInput'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserUpdateToOneWithWhereWithoutCategoriesOnPostsInput', {})
export class UserUpdateToOneWithWhereWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutCategoriesOnPostsInput
}
