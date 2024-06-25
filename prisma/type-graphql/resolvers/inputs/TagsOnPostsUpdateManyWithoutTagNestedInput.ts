import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyTagInputEnvelope } from '../inputs/TagsOnPostsCreateManyTagInputEnvelope'
import { TagsOnPostsCreateOrConnectWithoutTagInput } from '../inputs/TagsOnPostsCreateOrConnectWithoutTagInput'
import { TagsOnPostsCreateWithoutTagInput } from '../inputs/TagsOnPostsCreateWithoutTagInput'
import { TagsOnPostsScalarWhereInput } from '../inputs/TagsOnPostsScalarWhereInput'
import { TagsOnPostsUpdateManyWithWhereWithoutTagInput } from '../inputs/TagsOnPostsUpdateManyWithWhereWithoutTagInput'
import { TagsOnPostsUpdateWithWhereUniqueWithoutTagInput } from '../inputs/TagsOnPostsUpdateWithWhereUniqueWithoutTagInput'
import { TagsOnPostsUpsertWithWhereUniqueWithoutTagInput } from '../inputs/TagsOnPostsUpsertWithWhereUniqueWithoutTagInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateManyWithoutTagNestedInput', {})
export class TagsOnPostsUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateWithoutTagInput], {
    nullable: true,
  })
  create?: TagsOnPostsCreateWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateOrConnectWithoutTagInput], {
    nullable: true,
  })
  connectOrCreate?: TagsOnPostsCreateOrConnectWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true,
  })
  upsert?: TagsOnPostsUpsertWithWhereUniqueWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateManyTagInputEnvelope, {
    nullable: true,
  })
  createMany?: TagsOnPostsCreateManyTagInputEnvelope | undefined

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

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true,
  })
  update?: TagsOnPostsUpdateWithWhereUniqueWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpdateManyWithWhereWithoutTagInput], {
    nullable: true,
  })
  updateMany?: TagsOnPostsUpdateManyWithWhereWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: TagsOnPostsScalarWhereInput[] | undefined
}
