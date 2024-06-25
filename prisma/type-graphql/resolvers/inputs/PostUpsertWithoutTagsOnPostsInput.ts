import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateWithoutTagsOnPostsInput } from '../inputs/PostCreateWithoutTagsOnPostsInput'
import { PostUpdateWithoutTagsOnPostsInput } from '../inputs/PostUpdateWithoutTagsOnPostsInput'
import { PostWhereInput } from '../inputs/PostWhereInput'

@TypeGraphQL.InputType('PostUpsertWithoutTagsOnPostsInput', {})
export class PostUpsertWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => PostCreateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutTagsOnPostsInput

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined
}
