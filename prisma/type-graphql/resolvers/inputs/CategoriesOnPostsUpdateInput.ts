import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateInput', {})
export class CategoriesOnPostsUpdateInput {
  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined

  @TypeGraphQL.Field((_type) => CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined
}
