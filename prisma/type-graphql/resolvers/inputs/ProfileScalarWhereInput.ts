import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { StringNullableFilter } from '../inputs/StringNullableFilter'

@TypeGraphQL.InputType('ProfileScalarWhereInput', {})
export class ProfileScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ProfileScalarWhereInput], {
    nullable: true,
  })
  AND?: ProfileScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileScalarWhereInput], {
    nullable: true,
  })
  OR?: ProfileScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileScalarWhereInput], {
    nullable: true,
  })
  NOT?: ProfileScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  bio?: StringNullableFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined
}
