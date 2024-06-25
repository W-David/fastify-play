import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsScalarWhereInput } from '../inputs/CategoriesOnPostsScalarWhereInput'
import { CategoriesOnPostsUpdateManyMutationInput } from '../inputs/CategoriesOnPostsUpdateManyMutationInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput', {})
export class CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsScalarWhereInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsScalarWhereInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CategoriesOnPostsUpdateManyMutationInput
}
