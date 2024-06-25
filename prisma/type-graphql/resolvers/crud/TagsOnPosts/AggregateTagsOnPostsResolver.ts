import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { AggregateTagsOnPostsArgs } from './args/AggregateTagsOnPostsArgs'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { AggregateTagsOnPosts } from '../../outputs/AggregateTagsOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class AggregateTagsOnPostsResolver {
  @TypeGraphQL.Query((_returns) => AggregateTagsOnPosts, {
    nullable: false,
  })
  async aggregateTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTagsOnPostsArgs,
  ): Promise<AggregateTagsOnPosts> {
    return getPrismaFromContext(ctx).tagsOnPosts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    })
  }
}
