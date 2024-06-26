import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateWithoutCreatedByInput'
import { CategoriesOnPostsUpdateWithoutCreatedByInput } from '../inputs/CategoriesOnPostsUpdateWithoutCreatedByInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsUpsertWithWhereUniqueWithoutCreatedByInput', {})
export class CategoriesOnPostsUpsertWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateWithoutCreatedByInput, {
    nullable: false,
  })
  update!: CategoriesOnPostsUpdateWithoutCreatedByInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateWithoutCreatedByInput, {
    nullable: false,
  })
  create!: CategoriesOnPostsCreateWithoutCreatedByInput
}
