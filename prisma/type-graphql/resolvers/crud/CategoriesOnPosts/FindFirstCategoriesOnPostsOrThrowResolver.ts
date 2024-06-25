import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { FindFirstCategoriesOnPostsOrThrowArgs } from './args/FindFirstCategoriesOnPostsOrThrowArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class FindFirstCategoriesOnPostsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async findFirstCategoriesOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoriesOnPostsOrThrowArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
