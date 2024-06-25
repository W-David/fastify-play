import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CreateOneTagsOnPostsArgs } from './args/CreateOneTagsOnPostsArgs'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class CreateOneTagsOnPostsResolver {
  @TypeGraphQL.Mutation((_returns) => TagsOnPosts, {
    nullable: false,
  })
  async createOneTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneTagsOnPostsArgs,
  ): Promise<TagsOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
