import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { StringFilter } from '../inputs/StringFilter'

@TypeGraphQL.InputType('FileWhereInput', {})
export class FileWhereInput {
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

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined

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
