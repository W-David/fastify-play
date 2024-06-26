import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsCreateManyCreatedByInput } from '../inputs/TagsOnPostsCreateManyCreatedByInput'

@TypeGraphQL.InputType('TagsOnPostsCreateManyCreatedByInputEnvelope', {})
export class TagsOnPostsCreateManyCreatedByInputEnvelope {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateManyCreatedByInput], {
    nullable: false,
  })
  data!: TagsOnPostsCreateManyCreatedByInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
