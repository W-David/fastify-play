import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateWithoutCategoriesOnPostsInput } from '../inputs/PostCreateWithoutCategoriesOnPostsInput'
import { PostUpdateWithoutCategoriesOnPostsInput } from '../inputs/PostUpdateWithoutCategoriesOnPostsInput'
import { PostWhereInput } from '../inputs/PostWhereInput'

@TypeGraphQL.InputType('PostUpsertWithoutCategoriesOnPostsInput', {})
export class PostUpsertWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => PostCreateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutCategoriesOnPostsInput

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined
}
