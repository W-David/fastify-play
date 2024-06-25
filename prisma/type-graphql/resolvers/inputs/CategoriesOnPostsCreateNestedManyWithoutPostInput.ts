import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyPostInputEnvelope } from '../inputs/CategoriesOnPostsCreateManyPostInputEnvelope'
import { CategoriesOnPostsCreateOrConnectWithoutPostInput } from '../inputs/CategoriesOnPostsCreateOrConnectWithoutPostInput'
import { CategoriesOnPostsCreateWithoutPostInput } from '../inputs/CategoriesOnPostsCreateWithoutPostInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateNestedManyWithoutPostInput', {})
export class CategoriesOnPostsCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateWithoutPostInput], {
    nullable: true,
  })
  create?: CategoriesOnPostsCreateWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutPostInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoriesOnPostsCreateManyPostInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | undefined
}
