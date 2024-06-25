import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { AggregateCategoriesOnPostsArgs } from './args/AggregateCategoriesOnPostsArgs'
import { CreateManyCategoriesOnPostsArgs } from './args/CreateManyCategoriesOnPostsArgs'
import { CreateOneCategoriesOnPostsArgs } from './args/CreateOneCategoriesOnPostsArgs'
import { DeleteManyCategoriesOnPostsArgs } from './args/DeleteManyCategoriesOnPostsArgs'
import { DeleteOneCategoriesOnPostsArgs } from './args/DeleteOneCategoriesOnPostsArgs'
import { FindFirstCategoriesOnPostsArgs } from './args/FindFirstCategoriesOnPostsArgs'
import { FindFirstCategoriesOnPostsOrThrowArgs } from './args/FindFirstCategoriesOnPostsOrThrowArgs'
import { FindManyCategoriesOnPostsArgs } from './args/FindManyCategoriesOnPostsArgs'
import { FindUniqueCategoriesOnPostsArgs } from './args/FindUniqueCategoriesOnPostsArgs'
import { FindUniqueCategoriesOnPostsOrThrowArgs } from './args/FindUniqueCategoriesOnPostsOrThrowArgs'
import { GroupByCategoriesOnPostsArgs } from './args/GroupByCategoriesOnPostsArgs'
import { UpdateManyCategoriesOnPostsArgs } from './args/UpdateManyCategoriesOnPostsArgs'
import { UpdateOneCategoriesOnPostsArgs } from './args/UpdateOneCategoriesOnPostsArgs'
import { UpsertOneCategoriesOnPostsArgs } from './args/UpsertOneCategoriesOnPostsArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'
import { CategoriesOnPosts } from '../../../models/CategoriesOnPosts'
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput'
import { AggregateCategoriesOnPosts } from '../../outputs/AggregateCategoriesOnPosts'
import { CategoriesOnPostsGroupBy } from '../../outputs/CategoriesOnPostsGroupBy'

@TypeGraphQL.Resolver((_of) => CategoriesOnPosts)
export class CategoriesOnPostsCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateCategoriesOnPosts, {
    nullable: false,
  })
  async aggregateCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategoriesOnPostsArgs,
  ): Promise<AggregateCategoriesOnPosts> {
    return getPrismaFromContext(ctx).categoriesOnPosts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategoriesOnPostsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: false,
  })
  async createOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategoriesOnPostsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async deleteOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async findFirstCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async findFirstCategoriesOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoriesOnPostsOrThrowArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => [CategoriesOnPosts], {
    nullable: false,
  })
  async findManyCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async findUniqueCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async findUniqueCategoriesOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoriesOnPostsOrThrowArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => [CategoriesOnPostsGroupBy], {
    nullable: false,
  })
  async groupByCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPostsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategoriesOnPostsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: true,
  })
  async updateOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => CategoriesOnPosts, {
    nullable: false,
  })
  async upsertOneCategoriesOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneCategoriesOnPostsArgs,
  ): Promise<CategoriesOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).categoriesOnPosts.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
