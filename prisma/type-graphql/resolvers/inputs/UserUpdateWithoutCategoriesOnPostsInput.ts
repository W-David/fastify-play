import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { EnumRoleFieldUpdateOperationsInput } from '../inputs/EnumRoleFieldUpdateOperationsInput'
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput'
import { PostUpdateManyWithoutAuthorNestedInput } from '../inputs/PostUpdateManyWithoutAuthorNestedInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'
import { TagsOnPostsUpdateManyWithoutCreatedByNestedInput } from '../inputs/TagsOnPostsUpdateManyWithoutCreatedByNestedInput'

@TypeGraphQL.InputType('UserUpdateWithoutCategoriesOnPostsInput', {})
export class UserUpdateWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  nickName?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  password?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => EnumRoleFieldUpdateOperationsInput, {
    nullable: true,
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateManyWithoutCreatedByNestedInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsUpdateManyWithoutCreatedByNestedInput | undefined
}
