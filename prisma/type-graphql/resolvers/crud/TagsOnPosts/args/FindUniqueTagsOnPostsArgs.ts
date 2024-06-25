import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsWhereUniqueInput } from '../../../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.ArgsType()
export class FindUniqueTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput
}
