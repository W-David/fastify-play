import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { StringNullableFilter } from '../inputs/StringNullableFilter'
import { UserRelationFilter } from '../inputs/UserRelationFilter'

@TypeGraphQL.InputType('ProfileWhereInput', {})
export class ProfileWhereInput {
  @TypeGraphQL.Field((_type) => [ProfileWhereInput], {
    nullable: true,
  })
  AND?: ProfileWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereInput], {
    nullable: true,
  })
  OR?: ProfileWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereInput], {
    nullable: true,
  })
  NOT?: ProfileWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  bio?: StringNullableFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined
}
