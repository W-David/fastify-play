import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter'
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter'

@TypeGraphQL.InputType('CategoriesOnPostsScalarWhereWithAggregatesInput', {})
export class CategoriesOnPostsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: CategoriesOnPostsScalarWhereWithAggregatesInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: CategoriesOnPostsScalarWhereWithAggregatesInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: CategoriesOnPostsScalarWhereWithAggregatesInput[] | undefined

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  postId?: IntWithAggregatesFilter | undefined

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  categoryId?: IntWithAggregatesFilter | undefined

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  createdById?: IntWithAggregatesFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined
}
