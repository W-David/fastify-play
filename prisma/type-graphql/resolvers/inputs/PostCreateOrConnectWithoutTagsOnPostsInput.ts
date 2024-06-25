import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateWithoutTagsOnPostsInput } from '../inputs/PostCreateWithoutTagsOnPostsInput'
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput'

@TypeGraphQL.InputType('PostCreateOrConnectWithoutTagsOnPostsInput', {})
export class PostCreateOrConnectWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput

  @TypeGraphQL.Field((_type) => PostCreateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutTagsOnPostsInput
}
