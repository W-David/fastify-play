import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyCategoryInputEnvelope } from '../inputs/CategoriesOnPostsCreateManyCategoryInputEnvelope'
import { CategoriesOnPostsCreateOrConnectWithoutCategoryInput } from '../inputs/CategoriesOnPostsCreateOrConnectWithoutCategoryInput'
import { CategoriesOnPostsCreateWithoutCategoryInput } from '../inputs/CategoriesOnPostsCreateWithoutCategoryInput'
import { CategoriesOnPostsScalarWhereInput } from '../inputs/CategoriesOnPostsScalarWhereInput'
import { CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput } from '../inputs/CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput'
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput } from '../inputs/CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput'
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput } from '../inputs/CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateManyWithoutCategoryNestedInput', {})
export class CategoriesOnPostsUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateWithoutCategoryInput], {
    nullable: true,
  })
  create?: CategoriesOnPostsCreateWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateManyCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  set?: CategoriesOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CategoriesOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  delete?: CategoriesOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true,
  })
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategoriesOnPostsScalarWhereInput[] | undefined
}
