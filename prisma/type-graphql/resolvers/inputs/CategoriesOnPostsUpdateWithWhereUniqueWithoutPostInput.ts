import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsUpdateWithoutPostInput } from '../inputs/CategoriesOnPostsUpdateWithoutPostInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput', {})
export class CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: CategoriesOnPostsUpdateWithoutPostInput
}