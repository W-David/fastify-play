import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { PostListRelationFilter } from '../inputs/PostListRelationFilter'
import { ProfileListRelationFilter } from '../inputs/ProfileListRelationFilter'
import { StringFilter } from '../inputs/StringFilter'
import { UserWhereInput } from '../inputs/UserWhereInput'

@TypeGraphQL.InputType('UserWhereUniqueInput', {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email?: string | undefined

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  password?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined

  @TypeGraphQL.Field((_type) => ProfileListRelationFilter, {
    nullable: true,
  })
  profile?: ProfileListRelationFilter | undefined
}
