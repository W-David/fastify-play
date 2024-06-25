import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { StringFilter } from '../inputs/StringFilter'
import { TagsOnPostsListRelationFilter } from '../inputs/TagsOnPostsListRelationFilter'

@TypeGraphQL.InputType('TagWhereInput', {})
export class TagWhereInput {
  @TypeGraphQL.Field((_type) => [TagWhereInput], {
    nullable: true,
  })
  AND?: TagWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagWhereInput], {
    nullable: true,
  })
  OR?: TagWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagWhereInput], {
    nullable: true,
  })
  NOT?: TagWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsListRelationFilter, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsListRelationFilter | undefined
}
