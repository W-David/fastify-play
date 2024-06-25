import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsWhereInput } from '../inputs/TagsOnPostsWhereInput'

@TypeGraphQL.InputType('TagsOnPostsListRelationFilter', {})
export class TagsOnPostsListRelationFilter {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  every?: TagsOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  some?: TagsOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  none?: TagsOnPostsWhereInput | undefined
}
