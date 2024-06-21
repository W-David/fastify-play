import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput'
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../inputs/UserUpdateOneRequiredWithoutProfileNestedInput'

@TypeGraphQL.InputType('ProfileUpdateInput', {})
export class ProfileUpdateInput {
  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutProfileNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutProfileNestedInput | undefined
}
