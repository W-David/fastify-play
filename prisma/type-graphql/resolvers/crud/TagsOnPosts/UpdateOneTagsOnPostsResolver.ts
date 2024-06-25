import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { UpdateOneTagsOnPostsArgs } from './args/UpdateOneTagsOnPostsArgs'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class UpdateOneTagsOnPostsResolver {
  @TypeGraphQL.Mutation((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async updateOneTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneTagsOnPostsArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
