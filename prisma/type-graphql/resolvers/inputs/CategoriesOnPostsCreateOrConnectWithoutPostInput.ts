import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateWithoutPostInput } from '../inputs/CategoriesOnPostsCreateWithoutPostInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateOrConnectWithoutPostInput', {})
export class CategoriesOnPostsCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateWithoutPostInput, {
    nullable: false,
  })
  create!: CategoriesOnPostsCreateWithoutPostInput
}
