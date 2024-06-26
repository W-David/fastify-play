import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateWithoutCreatedByInput', {})
export class CategoriesOnPostsUpdateWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined

  @TypeGraphQL.Field((_type) => CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined
}
