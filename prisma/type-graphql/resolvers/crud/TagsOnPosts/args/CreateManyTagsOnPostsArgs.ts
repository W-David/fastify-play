import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsCreateManyInput } from '../../../inputs/TagsOnPostsCreateManyInput'

@TypeGraphQL.ArgsType()
export class CreateManyTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => [TagsOnPostsCreateManyInput], {
    nullable: false,
  })
  data!: TagsOnPostsCreateManyInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
