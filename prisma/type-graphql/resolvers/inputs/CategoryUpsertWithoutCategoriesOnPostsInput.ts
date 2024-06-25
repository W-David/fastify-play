import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateWithoutCategoriesOnPostsInput'
import { CategoryUpdateWithoutCategoriesOnPostsInput } from '../inputs/CategoryUpdateWithoutCategoriesOnPostsInput'
import { CategoryWhereInput } from '../inputs/CategoryWhereInput'

@TypeGraphQL.InputType('CategoryUpsertWithoutCategoriesOnPostsInput', {})
export class CategoryUpsertWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  update!: CategoryUpdateWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  create!: CategoryCreateWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => CategoryWhereInput, {
    nullable: true,
  })
  where?: CategoryWhereInput | undefined
}
