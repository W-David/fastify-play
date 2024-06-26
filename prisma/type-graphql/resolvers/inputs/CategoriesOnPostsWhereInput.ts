import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryRelationFilter } from '../inputs/CategoryRelationFilter'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'
import { PostRelationFilter } from '../inputs/PostRelationFilter'
import { UserRelationFilter } from '../inputs/UserRelationFilter'

@TypeGraphQL.InputType('CategoriesOnPostsWhereInput', {})
export class CategoriesOnPostsWhereInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereInput], {
    nullable: true,
  })
  AND?: CategoriesOnPostsWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereInput], {
    nullable: true,
  })
  OR?: CategoriesOnPostsWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereInput], {
    nullable: true,
  })
  NOT?: CategoriesOnPostsWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  postId?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  categoryId?: IntFilter | undefined

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

  @TypeGraphQL.Field((_type) => CategoryRelationFilter, {
    nullable: true,
  })
  category?: CategoryRelationFilter | undefined

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  createdBy?: UserRelationFilter | undefined
}
