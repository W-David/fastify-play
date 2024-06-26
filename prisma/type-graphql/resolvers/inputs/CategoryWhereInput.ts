import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsListRelationFilter } from '../inputs/CategoriesOnPostsListRelationFilter'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { StringFilter } from '../inputs/StringFilter'

@TypeGraphQL.InputType('CategoryWhereInput', {})
export class CategoryWhereInput {
  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  AND?: CategoryWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  OR?: CategoryWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  NOT?: CategoryWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsListRelationFilter, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsListRelationFilter | undefined
}
