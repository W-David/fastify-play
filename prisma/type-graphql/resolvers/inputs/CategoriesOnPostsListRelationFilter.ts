import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsWhereInput } from '../inputs/CategoriesOnPostsWhereInput'

@TypeGraphQL.InputType('CategoriesOnPostsListRelationFilter', {})
export class CategoriesOnPostsListRelationFilter {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  every?: CategoriesOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  some?: CategoriesOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  none?: CategoriesOnPostsWhereInput | undefined
}
