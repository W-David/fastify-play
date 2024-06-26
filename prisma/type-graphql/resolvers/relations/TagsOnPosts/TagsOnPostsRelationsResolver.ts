import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Post } from '../../../models/Post'
import { Tag } from '../../../models/Tag'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { User } from '../../../models/User'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class TagsOnPostsRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(@TypeGraphQL.Root() tagsOnPosts: TagsOnPosts, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .tagsOnPosts.findUniqueOrThrow({
        where: {
          postId_tagId: {
            postId: tagsOnPosts.postId,
            tagId: tagsOnPosts.tagId,
          },
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @TypeGraphQL.FieldResolver((_type) => Tag, {
    nullable: false,
  })
  async tag(@TypeGraphQL.Root() tagsOnPosts: TagsOnPosts, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .tagsOnPosts.findUniqueOrThrow({
        where: {
          postId_tagId: {
            postId: tagsOnPosts.postId,
            tagId: tagsOnPosts.tagId,
          },
        },
      })
      .tag({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async createdBy(@TypeGraphQL.Root() tagsOnPosts: TagsOnPosts, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .tagsOnPosts.findUniqueOrThrow({
        where: {
          postId_tagId: {
            postId: tagsOnPosts.postId,
            tagId: tagsOnPosts.tagId,
          },
        },
      })
      .createdBy({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
