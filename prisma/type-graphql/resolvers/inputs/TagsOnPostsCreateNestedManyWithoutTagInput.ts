import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyTagInputEnvelope } from '../inputs/TagsOnPostsCreateManyTagInputEnvelope'
import { TagsOnPostsCreateOrConnectWithoutTagInput } from '../inputs/TagsOnPostsCreateOrConnectWithoutTagInput'
import { TagsOnPostsCreateWithoutTagInput } from '../inputs/TagsOnPostsCreateWithoutTagInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsCreateNestedManyWithoutTagInput', {})
export class TagsOnPostsCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateWithoutTagInput], {
    nullable: true,
  })
  create?: TagsOnPostsCreateWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateOrConnectWithoutTagInput], {
    nullable: true,
  })
  connectOrCreate?: TagsOnPostsCreateOrConnectWithoutTagInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateManyTagInputEnvelope, {
    nullable: true,
  })
  createMany?: TagsOnPostsCreateManyTagInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: TagsOnPostsWhereUniqueInput[] | undefined
}
