import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyPostInput } from '../inputs/CategoriesOnPostsCreateManyPostInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateManyPostInputEnvelope', {})
export class CategoriesOnPostsCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateManyPostInput], {
    nullable: false,
  })
  data!: CategoriesOnPostsCreateManyPostInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
