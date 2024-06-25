import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Tag } from '../../../models/Tag'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { TagTagsOnPostsArgs } from './args/TagTagsOnPostsArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [TagsOnPosts], {
    nullable: false,
  })
  async TagsOnPosts(
    @TypeGraphQL.Root() tag: Tag,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: TagTagsOnPostsArgs,
  ): Promise<TagsOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .tag.findUniqueOrThrow({
        where: {
          id: tag.id,
        },
      })
      .TagsOnPosts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
