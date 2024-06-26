import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsOrderByWithAggregationInput } from '../../../inputs/TagsOnPostsOrderByWithAggregationInput'
import { TagsOnPostsScalarWhereWithAggregatesInput } from '../../../inputs/TagsOnPostsScalarWhereWithAggregatesInput'
import { TagsOnPostsWhereInput } from '../../../inputs/TagsOnPostsWhereInput'
import { TagsOnPostsScalarFieldEnum } from '../../../../enums/TagsOnPostsScalarFieldEnum'

@TypeGraphQL.ArgsType()
export class GroupByTagsOnPostsArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  where?: TagsOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: TagsOnPostsOrderByWithAggregationInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'postId' | 'tagId' | 'createdById' | 'createdAt' | 'updatedAt'>

  @TypeGraphQL.Field((_type) => TagsOnPostsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: TagsOnPostsScalarWhereWithAggregatesInput | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined
}
