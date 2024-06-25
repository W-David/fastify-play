import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryUpdateWithoutCategoriesOnPostsInput } from '../inputs/CategoryUpdateWithoutCategoriesOnPostsInput'
import { CategoryWhereInput } from '../inputs/CategoryWhereInput'

@TypeGraphQL.InputType('CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput', {})
export class CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput {
  @TypeGraphQL.Field((_type) => CategoryWhereInput, {
    nullable: true,
  })
  where?: CategoryWhereInput | undefined

  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutCategoriesOnPostsInput, {
    nullable: false,
  })
  data!: CategoryUpdateWithoutCategoriesOnPostsInput
}
