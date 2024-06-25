import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsCreateInput } from '../../../inputs/TagsOnPostsCreateInput'

@TypeGraphQL.ArgsType()
export class CreateOneTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsCreateInput, {
    nullable: false,
  })
  data!: TagsOnPostsCreateInput
}
