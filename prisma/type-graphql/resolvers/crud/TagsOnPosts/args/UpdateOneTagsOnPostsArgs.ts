import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsUpdateInput } from '../../../inputs/TagsOnPostsUpdateInput'
import { TagsOnPostsWhereUniqueInput } from '../../../inputs/TagsOnPostsWhereUniqueInput'

@TypeGraphQL.ArgsType()
export class UpdateOneTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateInput, {
    nullable: false,
  })
  data!: TagsOnPostsUpdateInput

  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: TagsOnPostsWhereUniqueInput
}
