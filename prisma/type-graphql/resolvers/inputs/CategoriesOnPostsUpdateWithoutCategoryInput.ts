import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'
import { UserUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/UserUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateWithoutCategoryInput', {})
export class CategoriesOnPostsUpdateWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  createdBy?: UserUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined
}
