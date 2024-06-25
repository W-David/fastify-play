import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateWithoutCategoriesOnPostsInput'
import { CategoryWhereUniqueInput } from '../inputs/CategoryWhereUniqueInput'

@TypeGraphQL.InputType('CategoryCreateOrConnectWithoutCategoriesOnPostsInput', {})
export class CategoryCreateOrConnectWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  create!: CategoryCreateWithoutCategoriesOnPostsInput
}
