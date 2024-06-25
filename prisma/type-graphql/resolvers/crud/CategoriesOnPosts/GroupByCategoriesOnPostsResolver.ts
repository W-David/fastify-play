import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { GroupByCategoriesOnPostsArgs } from './args/GroupByCategoriesOnPostsArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { CategoriesOnPostsGroupBy } from '../../outputs/CategoriesOnPostsGroupBy'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class GroupByCategoriesOnPostsResolver {
  @TypeGraphQL.Query((_returns) => [CategoriesOnPostsGroupBy], {
    nullable: false,
  })
  async groupByCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPostsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    })
  }
}
