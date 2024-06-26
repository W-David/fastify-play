import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { TagsOnPostsOrderByWithRelationInput } from '../../../inputs/TagsOnPostsOrderByWithRelationInput'
import { TagsOnPostsWhereInput } from '../../../inputs/TagsOnPostsWhereInput'
import { TagsOnPostsWhereUniqueInput } from '../../../inputs/TagsOnPostsWhereUniqueInput'
import { TagsOnPostsScalarFieldEnum } from '../../../../enums/TagsOnPostsScalarFieldEnum'

@TypeGraphQL.ArgsType()
export class FindFirstTagsOnPostsOrThrowArgs {
  @TypeGraphQL.Field((_type) => TagsOnPostsWhereInput, {
    nullable: true,
  })
  where?: TagsOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: TagsOnPostsOrderByWithRelationInput[] | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsWhereUniqueInput, {
    nullable: true,
  })
  cursor?: TagsOnPostsWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'postId' | 'tagId' | 'createdById' | 'createdAt' | 'updatedAt'> | undefined
}
