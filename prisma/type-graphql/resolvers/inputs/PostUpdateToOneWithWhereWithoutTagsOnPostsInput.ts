import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostUpdateWithoutTagsOnPostsInput } from '../inputs/PostUpdateWithoutTagsOnPostsInput'
import { PostWhereInput } from '../inputs/PostWhereInput'

@TypeGraphQL.InputType('PostUpdateToOneWithWhereWithoutTagsOnPostsInput', {})
export class PostUpdateToOneWithWhereWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateWithoutTagsOnPostsInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutTagsOnPostsInput
}
