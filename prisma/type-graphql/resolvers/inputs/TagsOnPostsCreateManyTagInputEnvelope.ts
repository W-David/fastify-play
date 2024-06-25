import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyTagInput } from '../inputs/TagsOnPostsCreateManyTagInput'

@TypeGraphQL.InputType('TagsOnPostsCreateManyTagInputEnvelope', {})
export class TagsOnPostsCreateManyTagInputEnvelope {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateManyTagInput], {
    nullable: false,
  })
  data!: TagsOnPostsCreateManyTagInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
