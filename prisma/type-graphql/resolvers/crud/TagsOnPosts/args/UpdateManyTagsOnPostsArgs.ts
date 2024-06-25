import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsUpdateManyMutationInput } from '../../../inputs/TagsOnPostsUpdateManyMutationInput'
import { TagsOnPostsWhereInput } from '../../../inputs/TagsOnPostsWhereInput'

@TypeGraphQL.ArgsType()
export class UpdateManyTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TagsOnPostsUpdateManyMutationInput

  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  where?: TagsOnPostsWhereInput | undefined
}
