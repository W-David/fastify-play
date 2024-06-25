import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { PostUpdateOneRequiredWithoutTagsOnPostsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutTagsOnPostsNestedInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateWithoutTagInput', {})
export class TagsOnPostsUpdateWithoutTagInput {
  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutTagsOnPostsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutTagsOnPostsNestedInput | undefined
}
