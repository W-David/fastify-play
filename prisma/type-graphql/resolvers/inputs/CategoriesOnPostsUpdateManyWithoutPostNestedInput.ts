import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyPostInputEnvelope } from '../inputs/CategoriesOnPostsCreateManyPostInputEnvelope'
import { CategoriesOnPostsCreateOrConnectWithoutPostInput } from '../inputs/CategoriesOnPostsCreateOrConnectWithoutPostInput'
import { CategoriesOnPostsCreateWithoutPostInput } from '../inputs/CategoriesOnPostsCreateWithoutPostInput'
import { CategoriesOnPostsScalarWhereInput } from '../inputs/CategoriesOnPostsScalarWhereInput'
import { CategoriesOnPostsUpdateManyWithWhereWithoutPostInput } from '../inputs/CategoriesOnPostsUpdateManyWithWhereWithoutPostInput'
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput } from '../inputs/CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput'
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput } from '../inputs/CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateManyWithoutPostNestedInput', {})
export class CategoriesOnPostsUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateWithoutPostInput], {
    nullable: true,
  })
  create?: CategoriesOnPostsCreateWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoriesOnPostsCreateManyPostInputEnvelope | undefined

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

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategoriesOnPostsScalarWhereInput[] | undefined
}
