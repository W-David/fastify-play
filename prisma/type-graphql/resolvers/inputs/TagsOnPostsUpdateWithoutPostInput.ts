import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { TagUpdateOneRequiredWithoutTagsOnPostsNestedInput } from '../inputs/TagUpdateOneRequiredWithoutTagsOnPostsNestedInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateWithoutPostInput', {})
export class TagsOnPostsUpdateWithoutPostInput {
  @TypeGraphQL.Field((_type) => TagUpdateOneRequiredWithoutTagsOnPostsNestedInput, {
    nullable: true,
  })
  tag?: TagUpdateOneRequiredWithoutTagsOnPostsNestedInput | undefined
}
