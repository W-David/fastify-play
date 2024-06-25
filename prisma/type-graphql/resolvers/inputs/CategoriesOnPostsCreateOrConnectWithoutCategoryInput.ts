import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateWithoutCategoryInput } from '../inputs/CategoriesOnPostsCreateWithoutCategoryInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateOrConnectWithoutCategoryInput', {})
export class CategoriesOnPostsCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateWithoutCategoryInput, {
    nullable: false,
  })
  create!: CategoriesOnPostsCreateWithoutCategoryInput
}
