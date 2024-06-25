import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyPostInputEnvelope } from '../inputs/TagsOnPostsCreateManyPostInputEnvelope'
import { TagsOnPostsCreateOrConnectWithoutPostInput } from '../inputs/TagsOnPostsCreateOrConnectWithoutPostInput'
import { TagsOnPostsCreateWithoutPostInput } from '../inputs/TagsOnPostsCreateWithoutPostInput'
import { TagsOnPostsWhereUniqueInput } from '../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('TagsOnPostsCreateNestedManyWithoutPostInput', {})
export class TagsOnPostsCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateWithoutPostInput], {
    nullable: true,
  })
  create?: TagsOnPostsCreateWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: TagsOnPostsCreateOrConnectWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: TagsOnPostsCreateManyPostInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: TagsOnPostsWhereUniqueInput[] | undefined
}
