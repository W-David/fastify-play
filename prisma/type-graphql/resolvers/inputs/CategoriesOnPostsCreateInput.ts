import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateNestedOneWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateNestedOneWithoutCategoriesOnPostsInput'
import { PostCreateNestedOneWithoutCategoriesOnPostsInput } from '../inputs/PostCreateNestedOneWithoutCategoriesOnPostsInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateInput', {})
export class CategoriesOnPostsCreateInput {
  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => CategoryCreateNestedOneWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  category!: CategoryCreateNestedOneWithoutCategoriesOnPostsInput
}
