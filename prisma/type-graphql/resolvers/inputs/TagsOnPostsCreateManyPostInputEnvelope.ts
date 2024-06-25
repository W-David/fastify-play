import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyPostInput } from '../inputs/TagsOnPostsCreateManyPostInput'

@TypeGraphQL.InputType('TagsOnPostsCreateManyPostInputEnvelope', {})
export class TagsOnPostsCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateManyPostInput], {
    nullable: false,
  })
  data!: TagsOnPostsCreateManyPostInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
