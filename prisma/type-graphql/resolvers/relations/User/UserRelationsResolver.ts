import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Post } from '../../../models/Post'
import { Profile } from '../../../models/Profile'
import { User } from '../../../models/User'
import { UserPostsArgs } from './args/UserPostsArgs'
import { UserProfileArgs } from './args/UserProfileArgs'
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

  @TypeGraphQL.FieldResolver((_type) => [Profile], {
    nullable: false,
  })
  async profile(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserProfileArgs,
  ): Promise<Profile[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .profile({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
