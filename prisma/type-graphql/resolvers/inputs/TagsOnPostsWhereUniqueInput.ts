import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { PostRelationFilter } from '../inputs/PostRelationFilter'
import { TagRelationFilter } from '../inputs/TagRelationFilter'
import { TagsOnPostsPostIdTagIdCompoundUniqueInput } from '../inputs/TagsOnPostsPostIdTagIdCompoundUniqueInput'
import { TagsOnPostsWhereInput } from '../inputs/TagsOnPostsWhereInput'
import { UserRelationFilter } from '../inputs/UserRelationFilter'

@TypeGraphQL.InputType('TagsOnPostsWhereUniqueInput', {})
export class TagsOnPostsWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TagsOnPostsPostIdTagIdCompoundUniqueInput, {
    nullable: true,
  })
  postId_tagId?: TagsOnPostsPostIdTagIdCompoundUniqueInput | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereInput], {
    nullable: true,
  })
  AND?: TagsOnPostsWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereInput], {
    nullable: true,
  })
  OR?: TagsOnPostsWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereInput], {
    nullable: true,
  })
  NOT?: TagsOnPostsWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  postId?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  tagId?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  createdById?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined

  @TypeGraphQL.Field((_type) => TagRelationFilter, {
    nullable: true,
  })
  tag?: TagRelationFilter | undefined

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  createdBy?: UserRelationFilter | undefined
}
