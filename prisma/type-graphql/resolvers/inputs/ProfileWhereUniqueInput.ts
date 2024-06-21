import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { ProfileWhereInput } from '../inputs/ProfileWhereInput'
import { StringNullableFilter } from '../inputs/StringNullableFilter'
import { UserRelationFilter } from '../inputs/UserRelationFilter'

@TypeGraphQL.InputType('ProfileWhereUniqueInput', {})
export class ProfileWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  userId?: number | undefined

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

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  bio?: StringNullableFilter | undefined

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined
}
