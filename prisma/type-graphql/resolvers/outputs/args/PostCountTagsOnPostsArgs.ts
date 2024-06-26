import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsWhereInput } from '../../inputs/TagsOnPostsWhereInput'

@TypeGraphQL.ArgsType()
export class PostCountTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  where?: TagsOnPostsWhereInput | undefined
}