import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { FindUniqueTagsOnPostsArgs } from './args/FindUniqueTagsOnPostsArgs'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class FindUniqueTagsOnPostsResolver {
  @TypeGraphQL.Query((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async findUniqueTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTagsOnPostsArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
