import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { Post } from '../../../models/Post'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { User } from '../../../models/User'
import { UserCategoriesOnPostsArgs } from './args/UserCategoriesOnPostsArgs'
import { UserPostsArgs } from './args/UserPostsArgs'
import { UserTagsOnPostsArgs } from './args/UserTagsOnPostsArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserPostsArgs,
  ): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .posts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @TypeGraphQL.FieldResolver((_type) => [CategoriesOnPosts], {
    nullable: false,
  })
  async CategoriesOnPosts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .CategoriesOnPosts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @TypeGraphQL.FieldResolver((_type) => [TagsOnPosts], {
    nullable: false,
  })
  async TagsOnPosts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserTagsOnPostsArgs,
  ): Promise<TagsOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .TagsOnPosts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
