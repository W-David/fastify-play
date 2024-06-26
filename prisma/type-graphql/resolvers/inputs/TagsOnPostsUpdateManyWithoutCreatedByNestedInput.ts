import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyCreatedByInputEnvelope } from '../inputs/TagsOnPostsCreateManyCreatedByInputEnvelope'
import { TagsOnPostsCreateOrConnectWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateOrConnectWithoutCreatedByInput'
import { TagsOnPostsCreateWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateWithoutCreatedByInput'
import { TagsOnPostsScalarWhereInput } from '../inputs/TagsOnPostsScalarWhereInput'
import { TagsOnPostsUpdateManyWithWhereWithoutCreatedByInput } from '../inputs/TagsOnPostsUpdateManyWithWhereWithoutCreatedByInput'
import { TagsOnPostsUpdateWithWhereUniqueWithoutCreatedByInput } from '../inputs/TagsOnPostsUpdateWithWhereUniqueWithoutCreatedByInput'
import { TagsOnPostsUpsertWithWhereUniqueWithoutCreatedByInput } from '../inputs/TagsOnPostsUpsertWithWhereUniqueWithoutCreatedByInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateManyWithoutCreatedByNestedInput', {})
export class TagsOnPostsUpdateManyWithoutCreatedByNestedInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateWithoutCreatedByInput], {
    nullable: true,
  })
  create?: TagsOnPostsCreateWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateOrConnectWithoutCreatedByInput], {
    nullable: true,
  })
  connectOrCreate?: TagsOnPostsCreateOrConnectWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true,
  })
  upsert?: TagsOnPostsUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateManyCreatedByInputEnvelope, {
    nullable: true,
  })
  createMany?: TagsOnPostsCreateManyCreatedByInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  set?: TagsOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: TagsOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  delete?: TagsOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: TagsOnPostsWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true,
  })
  update?: TagsOnPostsUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true,
  })
  updateMany?: TagsOnPostsUpdateManyWithWhereWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: TagsOnPostsScalarWhereInput[] | undefined
}
