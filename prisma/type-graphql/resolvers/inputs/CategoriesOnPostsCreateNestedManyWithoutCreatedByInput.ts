import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyCreatedByInputEnvelope } from '../inputs/CategoriesOnPostsCreateManyCreatedByInputEnvelope'
import { CategoriesOnPostsCreateOrConnectWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateOrConnectWithoutCreatedByInput'
import { CategoriesOnPostsCreateWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateWithoutCreatedByInput'
import { CategoriesOnPostsWhereUniqueInput } from '../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateNestedManyWithoutCreatedByInput', {})
export class CategoriesOnPostsCreateNestedManyWithoutCreatedByInput {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateWithoutCreatedByInput], {
    nullable: true,
  })
  create?: CategoriesOnPostsCreateWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateOrConnectWithoutCreatedByInput], {
    nullable: true,
  })
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCreatedByInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateManyCreatedByInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoriesOnPostsCreateManyCreatedByInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | undefined
}
