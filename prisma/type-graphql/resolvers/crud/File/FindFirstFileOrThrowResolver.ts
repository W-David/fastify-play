import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { FindFirstFileOrThrowArgs } from './args/FindFirstFileOrThrowArgs'
import { File } from '../../../models/File'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => File)
export class FindFirstFileOrThrowResolver {
  @TypeGraphQL.Query((_returns) => File, {
    nullable: true,
  })
  async findFirstFileOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstFileOrThrowArgs,
  ): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
