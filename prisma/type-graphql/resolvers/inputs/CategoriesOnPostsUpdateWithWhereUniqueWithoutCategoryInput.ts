import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsUpdateWithoutCategoryInput } from '../inputs/CategoriesOnPostsUpdateWithoutCategoryInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput', {})
export class CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateWithoutCategoryInput, {
    nullable: false,
  })
  data!: CategoriesOnPostsUpdateWithoutCategoryInput
}
