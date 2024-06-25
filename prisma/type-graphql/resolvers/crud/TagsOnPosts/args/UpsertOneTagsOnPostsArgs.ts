import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsCreateInput } from '../../../inputs/TagsOnPostsCreateInput'
import { TagsOnPostsUpdateInput } from '../../../inputs/TagsOnPostsUpdateInput'
import { TagsOnPostsWhereUniqueInput } from '../../../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.ArgsType()
export class UpsertOneTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateInput, {
    nullable: false,
  })
  create!: TagsOnPostsCreateInput

  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateInput, {
    nullable: false,
  })
  update!: TagsOnPostsUpdateInput
}
