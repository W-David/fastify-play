import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateOrConnectWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateOrConnectWithoutCategoriesOnPostsInput'
import { CategoryCreateWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateWithoutCategoriesOnPostsInput'
import { CategoryWhereUniqueInput } from '../inputs/CategoryWhereUniqueInput'

@TypeGraphQL.InputType('CategoryCreateNestedOneWithoutCategoriesOnPostsInput', {})
export class CategoryCreateNestedOneWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  create?: CategoryCreateWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => CategoryCreateOrConnectWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput | undefined
}
