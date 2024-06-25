import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput } from '../inputs/CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateWithoutPostInput', {})
export class CategoriesOnPostsUpdateWithoutPostInput {
  @TypeGraphQL.Field((_type) => CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput | undefined
}
