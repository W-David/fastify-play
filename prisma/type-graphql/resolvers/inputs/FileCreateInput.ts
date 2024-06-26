import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.InputType('FileCreateInput', {})
export class FileCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  path!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  extension!: string

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  size?: number | undefined
}
