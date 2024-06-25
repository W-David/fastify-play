import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateOrConnectWithoutCategoriesOnPostsInput } from '../inputs/PostCreateOrConnectWithoutCategoriesOnPostsInput'
import { PostCreateWithoutCategoriesOnPostsInput } from '../inputs/PostCreateWithoutCategoriesOnPostsInput'
import { PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput } from '../inputs/PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput'
import { PostUpsertWithoutCategoriesOnPostsInput } from '../inputs/PostUpsertWithoutCategoriesOnPostsInput'
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput'

@TypeGraphQL.InputType('PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput', {})
export class PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostUpsertWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput | undefined
}
