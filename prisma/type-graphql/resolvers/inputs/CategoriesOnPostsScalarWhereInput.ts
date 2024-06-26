import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'

@TypeGraphQL.InputType('CategoriesOnPostsScalarWhereInput', {})
export class CategoriesOnPostsScalarWhereInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
  })
  AND?: CategoriesOnPostsScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
  })
  OR?: CategoriesOnPostsScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
  })
  NOT?: CategoriesOnPostsScalarWhereInput[] | undefined

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
}
