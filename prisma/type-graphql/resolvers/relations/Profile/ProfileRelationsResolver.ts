import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Profile } from '../../../models/Profile'
import { User } from '../../../models/User'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => Profile)
export class ProfileRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(@TypeGraphQL.Root() profile: Profile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx)
      .profile.findUniqueOrThrow({
        where: {
          id: profile.id,
        },
      })
      .user({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }
}
