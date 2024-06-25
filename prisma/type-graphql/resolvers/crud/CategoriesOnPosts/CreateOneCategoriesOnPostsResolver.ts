import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CreateOneCategoriesOnPostsArgs } from './args/CreateOneCategoriesOnPostsArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class CreateOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: false,
  })
  async createOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
