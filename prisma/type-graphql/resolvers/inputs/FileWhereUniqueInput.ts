import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { FileWhereInput } from '../inputs/FileWhereInput'
import { IntFilter } from '../inputs/IntFilter'
import { StringFilter } from '../inputs/StringFilter'

@TypeGraphQL.InputType('FileWhereUniqueInput', {})
export class FileWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  AND?: FileWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  OR?: FileWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  NOT?: FileWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  path?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  extension?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  size?: IntFilter | undefined
}
