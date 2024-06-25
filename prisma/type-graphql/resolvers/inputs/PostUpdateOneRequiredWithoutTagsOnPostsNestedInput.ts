import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateOrConnectWithoutTagsOnPostsInput } from '../inputs/PostCreateOrConnectWithoutTagsOnPostsInput'
import { PostCreateWithoutTagsOnPostsInput } from '../inputs/PostCreateWithoutTagsOnPostsInput'
import { PostUpdateToOneWithWhereWithoutTagsOnPostsInput } from '../inputs/PostUpdateToOneWithWhereWithoutTagsOnPostsInput'
import { PostUpsertWithoutTagsOnPostsInput } from '../inputs/PostUpsertWithoutTagsOnPostsInput'
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput'

@TypeGraphQL.InputType('PostUpdateOneRequiredWithoutTagsOnPostsNestedInput', {})
export class PostUpdateOneRequiredWithoutTagsOnPostsNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutTagsOnPostsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutTagsOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostUpsertWithoutTagsOnPostsInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutTagsOnPostsInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutTagsOnPostsInput | undefined
}
