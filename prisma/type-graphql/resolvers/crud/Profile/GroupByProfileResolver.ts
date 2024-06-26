import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { GroupByProfileArgs } from './args/GroupByProfileArgs'
import { Profile } from '../../../models/Profile'
import { ProfileGroupBy } from '../../outputs/ProfileGroupBy'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => Profile)
export class GroupByProfileResolver {
  @TypeGraphQL.Query((_returns) => [ProfileGroupBy], {
    nullable: false,
  })
  async groupByProfile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByProfileArgs,
  ): Promise<ProfileGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).profile.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    })
  }
}
