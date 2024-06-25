import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateOrConnectWithoutTagsOnPostsInput } from '../inputs/PostCreateOrConnectWithoutTagsOnPostsInput'
import { PostCreateWithoutTagsOnPostsInput } from '../inputs/PostCreateWithoutTagsOnPostsInput'
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput'

@TypeGraphQL.InputType('PostCreateNestedOneWithoutTagsOnPostsInput', {})
export class PostCreateNestedOneWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutTagsOnPostsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutTagsOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined
}
