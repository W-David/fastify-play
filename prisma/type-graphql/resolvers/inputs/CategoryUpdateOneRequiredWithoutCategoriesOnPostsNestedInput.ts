import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCreateOrConnectWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateOrConnectWithoutCategoriesOnPostsInput'
import { CategoryCreateWithoutCategoriesOnPostsInput } from '../inputs/CategoryCreateWithoutCategoriesOnPostsInput'
import { CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput } from '../inputs/CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput'
import { CategoryUpsertWithoutCategoriesOnPostsInput } from '../inputs/CategoryUpsertWithoutCategoriesOnPostsInput'
import { CategoryWhereUniqueInput } from '../inputs/CategoryWhereUniqueInput'

@TypeGraphQL.InputType('CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput', {})
export class CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput {
  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  create?: CategoryCreateWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => CategoryCreateOrConnectWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => CategoryUpsertWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  upsert?: CategoryUpsertWithoutCategoriesOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput, {
    nullable: true,
  })
  update?: CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput | undefined
}
