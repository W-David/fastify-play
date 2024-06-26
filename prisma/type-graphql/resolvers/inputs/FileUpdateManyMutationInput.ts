import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput'
import { IntFieldUpdateOperationsInput } from '../inputs/IntFieldUpdateOperationsInput'
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput'

@TypeGraphQL.InputType('FileUpdateManyMutationInput', {})
export class FileUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  path?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  extension?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  size?: IntFieldUpdateOperationsInput | undefined
}
