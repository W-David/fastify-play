import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter'
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter'

@TypeGraphQL.InputType('TagsOnPostsScalarWhereWithAggregatesInput', {})
export class TagsOnPostsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: TagsOnPostsScalarWhereWithAggregatesInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: TagsOnPostsScalarWhereWithAggregatesInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: TagsOnPostsScalarWhereWithAggregatesInput[] | undefined

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  postId?: IntWithAggregatesFilter | undefined

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  tagId?: IntWithAggregatesFilter | undefined

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  createdById?: IntWithAggregatesFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined
}
