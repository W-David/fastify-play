import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateNestedOneWithoutCategoriesOnPostsInput } from '../inputs/PostCreateNestedOneWithoutCategoriesOnPostsInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateWithoutCategoryInput', {})
export class CategoriesOnPostsCreateWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutCategoriesOnPostsInput
}
