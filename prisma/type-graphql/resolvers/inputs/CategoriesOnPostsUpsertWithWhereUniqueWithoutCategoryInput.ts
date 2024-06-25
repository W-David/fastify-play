import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateWithoutCategoryInput } from '../inputs/CategoriesOnPostsCreateWithoutCategoryInput'
import { CategoriesOnPostsUpdateWithoutCategoryInput } from '../inputs/CategoriesOnPostsUpdateWithoutCategoryInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput', {})
export class CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateWithoutCategoryInput, {
    nullable: false,
  })
  update!: CategoriesOnPostsUpdateWithoutCategoryInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateWithoutCategoryInput, {
    nullable: false,
  })
  create!: CategoriesOnPostsCreateWithoutCategoryInput
}
