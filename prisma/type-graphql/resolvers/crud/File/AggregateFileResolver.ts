import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { AggregateFileArgs } from './args/AggregateFileArgs'
import { File } from '../../../models/File'
import { AggregateFile } from '../../outputs/AggregateFile'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

@TypeGraphQL.Resolver((_of) => File)
export class AggregateFileResolver {
  @TypeGraphQL.Query((_returns) => AggregateFile, {
    nullable: false,
  })
  async aggregateFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateFileArgs,
  ): Promise<AggregateFile> {
    return getPrismaFromContext(ctx).file.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    })
  }
}
