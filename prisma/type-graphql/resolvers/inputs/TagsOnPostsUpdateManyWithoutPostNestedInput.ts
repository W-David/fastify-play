import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyPostInputEnvelope } from '../inputs/TagsOnPostsCreateManyPostInputEnvelope'
import { TagsOnPostsCreateOrConnectWithoutPostInput } from '../inputs/TagsOnPostsCreateOrConnectWithoutPostInput'
import { TagsOnPostsCreateWithoutPostInput } from '../inputs/TagsOnPostsCreateWithoutPostInput'
import { TagsOnPostsScalarWhereInput } from '../inputs/TagsOnPostsScalarWhereInput'
import { TagsOnPostsUpdateManyWithWhereWithoutPostInput } from '../inputs/TagsOnPostsUpdateManyWithWhereWithoutPostInput'
import { TagsOnPostsUpdateWithWhereUniqueWithoutPostInput } from '../inputs/TagsOnPostsUpdateWithWhereUniqueWithoutPostInput'
import { TagsOnPostsUpsertWithWhereUniqueWithoutPostInput } from '../inputs/TagsOnPostsUpsertWithWhereUniqueWithoutPostInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsUpdateManyWithoutPostNestedInput', {})
export class TagsOnPostsUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateWithoutPostInput], {
    nullable: true,
  })
  create?: TagsOnPostsCreateWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: TagsOnPostsCreateOrConnectWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: TagsOnPostsUpsertWithWhereUniqueWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: TagsOnPostsCreateManyPostInputEnvelope | undefined

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

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: TagsOnPostsUpdateWithWhereUniqueWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: TagsOnPostsUpdateManyWithWhereWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: TagsOnPostsScalarWhereInput[] | undefined
}
