import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { FindUniqueCategoriesOnPostsOrThrowArgs } from './args/FindUniqueCategoriesOnPostsOrThrowArgs'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class FindUniqueCategoriesOnPostsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async findUniqueCategoriesOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoriesOnPostsOrThrowArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
