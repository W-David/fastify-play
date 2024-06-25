import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { Post } from '../../../models/Post'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { User } from '../../../models/User'
import { PostCategoriesOnPostsArgs } from './args/PostCategoriesOnPostsArgs'
import { PostTagsOnPostsArgs } from './args/PostTagsOnPostsArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .author({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @TypeGraphQL.FieldResolver((_type) => [CategoriesOnPosts], {
    nullable: false,
  })
  async CategoriesOnPosts(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
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
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostTagsOnPostsArgs,
  ): Promise<TagsOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .TagsOnPosts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
