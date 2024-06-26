import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateWithoutCreatedByInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateOrConnectWithoutCreatedByInput', {})
export class CategoriesOnPostsCreateOrConnectWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateWithoutCreatedByInput, {
    nullable: false,
  })
  create!: CategoriesOnPostsCreateWithoutCreatedByInput
}
