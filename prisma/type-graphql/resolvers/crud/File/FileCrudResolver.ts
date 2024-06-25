import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { AggregateFileArgs } from './args/AggregateFileArgs'
import { CreateManyFileArgs } from './args/CreateManyFileArgs'
import { CreateOneFileArgs } from './args/CreateOneFileArgs'
import { DeleteManyFileArgs } from './args/DeleteManyFileArgs'
import { DeleteOneFileArgs } from './args/DeleteOneFileArgs'
import { FindFirstFileArgs } from './args/FindFirstFileArgs'
import { FindFirstFileOrThrowArgs } from './args/FindFirstFileOrThrowArgs'
import { FindManyFileArgs } from './args/FindManyFileArgs'
import { FindUniqueFileArgs } from './args/FindUniqueFileArgs'
import { FindUniqueFileOrThrowArgs } from './args/FindUniqueFileOrThrowArgs'
import { GroupByFileArgs } from './args/GroupByFileArgs'
import { UpdateManyFileArgs } from './args/UpdateManyFileArgs'
import { UpdateOneFileArgs } from './args/UpdateOneFileArgs'
import { UpsertOneFileArgs } from './args/UpsertOneFileArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'
import { File } from '../../../models/File'
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput'
import { AggregateFile } from '../../outputs/AggregateFile'
import { FileGroupBy } from '../../outputs/FileGroupBy'

@TypeGraphQL.Resolver((_of) => File)
export class FileCrudResolver {
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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyFileArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => File, {
    nullable: false,
  })
  async createOneFile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFileArgs): Promise<File> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyFileArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => File, {
    nullable: true,
  })
  async deleteOneFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneFileArgs,
  ): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => File, {
    nullable: true,
  })
  async findFirstFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstFileArgs,
  ): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

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

  @TypeGraphQL.Query((_returns) => File, {
    nullable: true,
  })
  async file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFileArgs): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => File, {
    nullable: true,
  })
  async getFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueFileOrThrowArgs,
  ): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => [FileGroupBy], {
    nullable: false,
  })
  async groupByFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByFileArgs,
  ): Promise<FileGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyFileArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => File, {
    nullable: true,
  })
  async updateOneFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneFileArgs,
  ): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => File, {
    nullable: false,
  })
  async upsertOneFile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFileArgs): Promise<File> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).file.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
