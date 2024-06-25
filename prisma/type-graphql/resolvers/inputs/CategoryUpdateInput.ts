import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsUpdateManyWithoutCategoryNestedInput } from '../inputs/CategoriesOnPostsUpdateManyWithoutCategoryNestedInput'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'

@TypeGraphQL.InputType('CategoryUpdateInput', {})
export class CategoryUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateManyWithoutCategoryNestedInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsUpdateManyWithoutCategoryNestedInput | undefined
}
