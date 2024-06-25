import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { GroupByTagsOnPostsArgs } from './args/GroupByTagsOnPostsArgs'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { TagsOnPostsGroupBy } from '../../outputs/TagsOnPostsGroupBy'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class GroupByTagsOnPostsResolver {
  @TypeGraphQL.Query((_returns) => [TagsOnPostsGroupBy], {
    nullable: false,
  })
  async groupByTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByTagsOnPostsArgs,
  ): Promise<TagsOnPostsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    })
  }
}
