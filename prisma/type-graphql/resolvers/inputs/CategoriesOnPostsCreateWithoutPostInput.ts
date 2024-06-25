import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateNestedOneWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateNestedOneWithoutCategoriesOnPostsInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateWithoutPostInput', {})
export class CategoriesOnPostsCreateWithoutPostInput {
  @TypeGraphQL.Field((_type) => CategoryCreateNestedOneWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  category!: CategoryCreateNestedOneWithoutCategoriesOnPostsInput
}
