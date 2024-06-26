import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsListRelationFilter } from '../inputs/CategoriesOnPostsListRelationFilter'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { EnumRoleFilter } from '../inputs/EnumRoleFilter'
import { IntFilter } from '../inputs/IntFilter'
import { PostListRelationFilter } from '../inputs/PostListRelationFilter'
import { StringFilter } from '../inputs/StringFilter'
import { StringNullableFilter } from '../inputs/StringNullableFilter'
import { TagsOnPostsListRelationFilter } from '../inputs/TagsOnPostsListRelationFilter'

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

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  nickName?: StringNullableFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  password?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  avatar?: StringNullableFilter | undefined

  @TypeGraphQL.Field((_type) => EnumRoleFilter, {
    nullable: true,
  })
  role?: EnumRoleFilter | undefined

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsListRelationFilter, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsListRelationFilter | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsListRelationFilter, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsListRelationFilter | undefined
}
