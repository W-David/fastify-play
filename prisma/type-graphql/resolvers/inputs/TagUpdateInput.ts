import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'
import { TagsOnPostsUpdateManyWithoutTagNestedInput } from '../inputs/TagsOnPostsUpdateManyWithoutTagNestedInput'

@TypeGraphQL.InputType('TagUpdateInput', {})
export class TagUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateManyWithoutTagNestedInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsUpdateManyWithoutTagNestedInput | undefined
}
