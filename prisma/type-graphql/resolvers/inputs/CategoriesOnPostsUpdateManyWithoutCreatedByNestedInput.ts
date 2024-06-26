import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyCreatedByInputEnvelope } from '../inputs/CategoriesOnPostsCreateManyCreatedByInputEnvelope'
import { CategoriesOnPostsCreateOrConnectWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateOrConnectWithoutCreatedByInput'
import { CategoriesOnPostsCreateWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateWithoutCreatedByInput'
import { CategoriesOnPostsScalarWhereInput } from '../inputs/CategoriesOnPostsScalarWhereInput'
import { CategoriesOnPostsUpdateManyWithWhereWithoutCreatedByInput } from '../inputs/CategoriesOnPostsUpdateManyWithWhereWithoutCreatedByInput'
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutCreatedByInput } from '../inputs/CategoriesOnPostsUpdateWithWhereUniqueWithoutCreatedByInput'
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutCreatedByInput } from '../inputs/CategoriesOnPostsUpsertWithWhereUniqueWithoutCreatedByInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateManyWithoutCreatedByNestedInput', {})
export class CategoriesOnPostsUpdateManyWithoutCreatedByNestedInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateWithoutCreatedByInput], {
    nullable: true,
  })
  create?: CategoriesOnPostsCreateWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateOrConnectWithoutCreatedByInput], {
    nullable: true,
  })
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true,
  })
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateManyCreatedByInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoriesOnPostsCreateManyCreatedByInputEnvelope | undefined

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

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true,
  })
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true,
  })
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategoriesOnPostsScalarWhereInput[] | undefined
}
