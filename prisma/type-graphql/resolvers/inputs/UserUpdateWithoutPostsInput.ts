import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsUpdateManyWithoutCreatedByNestedInput } from '../inputs/CategoriesOnPostsUpdateManyWithoutCreatedByNestedInput'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { EnumRoleFieldUpdateOperationsInput } from '../inputs/EnumRoleFieldUpdateOperationsInput'
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'
import { TagsOnPostsUpdateManyWithoutCreatedByNestedInput } from '../inputs/TagsOnPostsUpdateManyWithoutCreatedByNestedInput'

@TypeGraphQL.InputType('UserUpdateWithoutPostsInput', {})
export class UserUpdateWithoutPostsInput {
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

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateManyWithoutCreatedByNestedInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsUpdateManyWithoutCreatedByNestedInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateManyWithoutCreatedByNestedInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsUpdateManyWithoutCreatedByNestedInput | undefined
}
