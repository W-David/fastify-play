import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { BoolFieldUpdateOperationsInput } from '../inputs/BoolFieldUpdateOperationsInput'
import { CategoriesOnPostsUpdateManyWithoutPostNestedInput } from '../inputs/CategoriesOnPostsUpdateManyWithoutPostNestedInput'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { IntFieldUpdateOperationsInput } from '../inputs/IntFieldUpdateOperationsInput'
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'
import { TagsOnPostsUpdateManyWithoutPostNestedInput } from '../inputs/TagsOnPostsUpdateManyWithoutPostNestedInput'

@TypeGraphQL.InputType('PostUpdateWithoutAuthorInput', {})
export class PostUpdateWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  published?: BoolFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  favoNum?: IntFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  browNum?: IntFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsUpdateManyWithoutPostNestedInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsUpdateManyWithoutPostNestedInput | undefined
}
