import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { AggregateCategoriesOnPostsArgs } from './args/AggregateCategoriesOnPostsArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { AggregateCategoriesOnPosts } from '../../outputs/AggregateCategoriesOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class AggregateCategoriesOnPostsResolver {
  @TypeGraphQL.Query((_returns) => AggregateCategoriesOnPosts, {
    nullable: false,
  })
  async aggregateCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategoriesOnPostsArgs,
  ): Promise<AggregateCategoriesOnPosts> {
    return getPrismaFromContext(ctx).categoriesOnPosts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    })
  }
}
