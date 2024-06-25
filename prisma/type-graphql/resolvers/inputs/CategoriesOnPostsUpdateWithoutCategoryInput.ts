import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateWithoutCategoryInput', {})
export class CategoriesOnPostsUpdateWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined
}
