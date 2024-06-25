import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyCategoryInputEnvelope } from '../inputs/CategoriesOnPostsCreateManyCategoryInputEnvelope'
import { CategoriesOnPostsCreateOrConnectWithoutCategoryInput } from '../inputs/CategoriesOnPostsCreateOrConnectWithoutCategoryInput'
import { CategoriesOnPostsCreateWithoutCategoryInput } from '../inputs/CategoriesOnPostsCreateWithoutCategoryInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateNestedManyWithoutCategoryInput', {})
export class CategoriesOnPostsCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateWithoutCategoryInput], {
    nullable: true,
  })
  create?: CategoriesOnPostsCreateWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateManyCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | undefined
}
