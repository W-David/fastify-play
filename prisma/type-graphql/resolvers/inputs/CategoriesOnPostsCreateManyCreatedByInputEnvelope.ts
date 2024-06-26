import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyCreatedByInput } from '../inputs/CategoriesOnPostsCreateManyCreatedByInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateManyCreatedByInputEnvelope', {})
export class CategoriesOnPostsCreateManyCreatedByInputEnvelope {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateManyCreatedByInput], {
    nullable: false,
  })
  data!: CategoriesOnPostsCreateManyCreatedByInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
