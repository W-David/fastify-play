import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { EnumRoleFilter } from '../inputs/EnumRoleFilter'
import { IntFilter } from '../inputs/IntFilter'
import { PostListRelationFilter } from '../inputs/PostListRelationFilter'
import { ProfileListRelationFilter } from '../inputs/ProfileListRelationFilter'
import { StringFilter } from '../inputs/StringFilter'

@TypeGraphQL.InputType('UserWhereInput', {})
export class UserWhereInput {
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
  email?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  password?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => EnumRoleFilter, {
    nullable: true,
  })
  role?: EnumRoleFilter | undefined

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined

  @TypeGraphQL.Field((_type) => ProfileListRelationFilter, {
    nullable: true,
  })
  profile?: ProfileListRelationFilter | undefined
}
