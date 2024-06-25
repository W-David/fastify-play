import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { FindManyFileArgs } from './args/FindManyFileArgs'
import { File } from '../../../models/File'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => File)
export class FindManyFileResolver {
  @TypeGraphQL.Query((_returns) => [File], {
    nullable: false,
  })
  async files(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFileArgs): Promise<File[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
