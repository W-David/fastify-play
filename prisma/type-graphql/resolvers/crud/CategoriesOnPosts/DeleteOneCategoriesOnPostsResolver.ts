import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { DeleteOneCategoriesOnPostsArgs } from './args/DeleteOneCategoriesOnPostsArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class DeleteOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async deleteOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
