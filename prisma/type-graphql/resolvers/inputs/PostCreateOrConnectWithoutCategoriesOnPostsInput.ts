import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateWithoutCategoriesOnPostsInput } from '../inputs/PostCreateWithoutCategoriesOnPostsInput'
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput'

@TypeGraphQL.InputType('PostCreateOrConnectWithoutCategoriesOnPostsInput', {})
export class PostCreateOrConnectWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput

  @TypeGraphQL.Field((_type) => PostCreateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutCategoriesOnPostsInput
}
