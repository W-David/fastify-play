import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyCreatedByInputEnvelope } from '../inputs/TagsOnPostsCreateManyCreatedByInputEnvelope'
import { TagsOnPostsCreateOrConnectWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateOrConnectWithoutCreatedByInput'
import { TagsOnPostsCreateWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateWithoutCreatedByInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsCreateNestedManyWithoutCreatedByInput', {})
export class TagsOnPostsCreateNestedManyWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateWithoutCreatedByInput], {
    nullable: true,
  })
  create?: TagsOnPostsCreateWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateOrConnectWithoutCreatedByInput], {
    nullable: true,
  })
  connectOrCreate?: TagsOnPostsCreateOrConnectWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateManyCreatedByInputEnvelope, {
    nullable: true,
  })
  createMany?: TagsOnPostsCreateManyCreatedByInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: TagsOnPostsWhereUniqueInput[] | undefined
}
