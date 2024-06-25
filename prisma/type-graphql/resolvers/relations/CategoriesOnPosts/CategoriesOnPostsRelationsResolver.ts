import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { Category } from '../../../models/Category'
import { Post } from '../../../models/Post'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class CategoriesOnPostsRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() categoriesOnPosts: CategoriesOnPosts,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .categoriesOnPosts.findUniqueOrThrow({
        where: {
          postId_categoryId: {
            postId: categoriesOnPosts.postId,
            categoryId: categoriesOnPosts.categoryId,
          },
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @TypeGraphQL.FieldResolver((_type) => Category, {
    nullable: false,
  })
  async category(
    @TypeGraphQL.Root() categoriesOnPosts: CategoriesOnPosts,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .categoriesOnPosts.findUniqueOrThrow({
        where: {
          postId_categoryId: {
            postId: categoriesOnPosts.postId,
            categoryId: categoriesOnPosts.categoryId,
          },
        },
      })
      .category({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
