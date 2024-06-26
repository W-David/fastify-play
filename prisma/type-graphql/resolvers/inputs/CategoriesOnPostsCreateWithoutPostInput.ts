import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateNestedOneWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateNestedOneWithoutCategoriesOnPostsInput'
import { UserCreateNestedOneWithoutCategoriesOnPostsInput } from '../inputs/UserCreateNestedOneWithoutCategoriesOnPostsInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateWithoutPostInput', {})
export class CategoriesOnPostsCreateWithoutPostInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => CategoryCreateNestedOneWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  category!: CategoryCreateNestedOneWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  createdBy!: UserCreateNestedOneWithoutCategoriesOnPostsInput
}
