import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { EnumRoleFieldUpdateOperationsInput } from '../inputs/EnumRoleFieldUpdateOperationsInput'
import { ProfileUpdateManyWithoutUserNestedInput } from '../inputs/ProfileUpdateManyWithoutUserNestedInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'

@TypeGraphQL.InputType('UserUpdateWithoutPostsInput', {})
export class UserUpdateWithoutPostsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  password?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => EnumRoleFieldUpdateOperationsInput, {
    nullable: true,
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => ProfileUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  profile?: ProfileUpdateManyWithoutUserNestedInput | undefined
}
