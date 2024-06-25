import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsListRelationFilter } from '../inputs/CategoriesOnPostsListRelationFilter'
import { CategoryWhereInput } from '../inputs/CategoryWhereInput'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { StringFilter } from '../inputs/StringFilter'

@TypeGraphQL.InputType('CategoryWhereUniqueInput', {})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined

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

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsListRelationFilter, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsListRelationFilter | undefined
}
