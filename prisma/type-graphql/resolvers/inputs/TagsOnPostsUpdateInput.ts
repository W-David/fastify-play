import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { PostUpdateOneRequiredWithoutTagsOnPostsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutTagsOnPostsNestedInput'
import { TagUpdateOneRequiredWithoutTagsOnPostsNestedInput } from '../inputs/TagUpdateOneRequiredWithoutTagsOnPostsNestedInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateInput', {})
export class TagsOnPostsUpdateInput {
  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutTagsOnPostsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutTagsOnPostsNestedInput | undefined

  @TypeGraphQL.Field((_type) => TagUpdateOneRequiredWithoutTagsOnPostsNestedInput, {
    nullable: true,
  })
  tag?: TagUpdateOneRequiredWithoutTagsOnPostsNestedInput | undefined
}
