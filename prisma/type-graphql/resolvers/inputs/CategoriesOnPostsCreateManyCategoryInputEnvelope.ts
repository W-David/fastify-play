import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateManyCategoryInput } from '../inputs/CategoriesOnPostsCreateManyCategoryInput'

@TypeGraphQL.InputType('CategoriesOnPostsCreateManyCategoryInputEnvelope', {})
export class CategoriesOnPostsCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateManyCategoryInput], {
    nullable: false,
  })
  data!: CategoriesOnPostsCreateManyCategoryInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
