import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { FindUniqueTagsOnPostsOrThrowArgs } from './args/FindUniqueTagsOnPostsOrThrowArgs'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class FindUniqueTagsOnPostsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async findUniqueTagsOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTagsOnPostsOrThrowArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
