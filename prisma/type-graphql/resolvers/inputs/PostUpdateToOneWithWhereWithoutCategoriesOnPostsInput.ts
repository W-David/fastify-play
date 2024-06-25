import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostUpdateWithoutCategoriesOnPostsInput } from '../inputs/PostUpdateWithoutCategoriesOnPostsInput'
import { PostWhereInput } from '../inputs/PostWhereInput'

@TypeGraphQL.InputType('PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput', {})
export class PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutCategoriesOnPostsInput
}
