import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { Category } from '../../../models/Category'
import { CategoryCategoriesOnPostsArgs } from './args/CategoryCategoriesOnPostsArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [CategoriesOnPosts], {
    nullable: false,
  })
  async CategoriesOnPosts(
    @TypeGraphQL.Root() category: Category,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CategoryCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .category.findUniqueOrThrow({
        where: {
          id: category.id,
        },
      })
      .CategoriesOnPosts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
