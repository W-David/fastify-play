import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { UpsertOneCategoriesOnPostsArgs } from './args/UpsertOneCategoriesOnPostsArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class UpsertOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: false,
  })
  async upsertOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
