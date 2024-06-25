import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { PostRelationFilter } from '../inputs/PostRelationFilter'
import { TagRelationFilter } from '../inputs/TagRelationFilter'

@TypeGraphQL.InputType('TagsOnPostsWhereInput', {})
export class TagsOnPostsWhereInput {
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

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined

  @TypeGraphQL.Field((_type) => TagRelationFilter, {
    nullable: true,
  })
  tag?: TagRelationFilter | undefined
}
