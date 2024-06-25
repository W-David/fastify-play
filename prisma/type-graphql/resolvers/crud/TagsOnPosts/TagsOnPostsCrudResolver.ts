import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { AggregateTagsOnPostsArgs } from './args/AggregateTagsOnPostsArgs'
import { CreateManyTagsOnPostsArgs } from './args/CreateManyTagsOnPostsArgs'
import { CreateOneTagsOnPostsArgs } from './args/CreateOneTagsOnPostsArgs'
import { DeleteManyTagsOnPostsArgs } from './args/DeleteManyTagsOnPostsArgs'
import { DeleteOneTagsOnPostsArgs } from './args/DeleteOneTagsOnPostsArgs'
import { FindFirstTagsOnPostsArgs } from './args/FindFirstTagsOnPostsArgs'
import { FindFirstTagsOnPostsOrThrowArgs } from './args/FindFirstTagsOnPostsOrThrowArgs'
import { FindManyTagsOnPostsArgs } from './args/FindManyTagsOnPostsArgs'
import { FindUniqueTagsOnPostsArgs } from './args/FindUniqueTagsOnPostsArgs'
import { FindUniqueTagsOnPostsOrThrowArgs } from './args/FindUniqueTagsOnPostsOrThrowArgs'
import { GroupByTagsOnPostsArgs } from './args/GroupByTagsOnPostsArgs'
import { UpdateManyTagsOnPostsArgs } from './args/UpdateManyTagsOnPostsArgs'
import { UpdateOneTagsOnPostsArgs } from './args/UpdateOneTagsOnPostsArgs'
import { UpsertOneTagsOnPostsArgs } from './args/UpsertOneTagsOnPostsArgs'
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'
import { TagsOnPosts } from '../../../models/TagsOnPosts'
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput'
import { AggregateTagsOnPosts } from '../../outputs/AggregateTagsOnPosts'
import { TagsOnPostsGroupBy } from '../../outputs/TagsOnPostsGroupBy'

@TypeGraphQL.Resolver((_of) => TagsOnPosts)
export class TagsOnPostsCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateTagsOnPosts, {
    nullable: false,
  })
  async aggregateTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTagsOnPostsArgs,
  ): Promise<AggregateTagsOnPosts> {
    return getPrismaFromContext(ctx).tagsOnPosts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyTagsOnPostsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => TagsOnPosts, {
    nullable: false,
  })
  async createOneTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneTagsOnPostsArgs,
  ): Promise<TagsOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyTagsOnPostsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async deleteOneTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneTagsOnPostsArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async findFirstTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstTagsOnPostsArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async findFirstTagsOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstTagsOnPostsOrThrowArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => [TagsOnPosts], {
    nullable: false,
  })
  async findManyTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyTagsOnPostsArgs,
  ): Promise<TagsOnPosts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async findUniqueTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTagsOnPostsArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async findUniqueTagsOnPostsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTagsOnPostsOrThrowArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Query((_returns) => [TagsOnPostsGroupBy], {
    nullable: false,
  })
  async groupByTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByTagsOnPostsArgs,
  ): Promise<TagsOnPostsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyTagsOnPostsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => TagsOnPosts, {
    nullable: true,
  })
  async updateOneTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneTagsOnPostsArgs,
  ): Promise<TagsOnPosts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }

  @TypeGraphQL.Mutation((_returns) => TagsOnPosts, {
    nullable: false,
  })
  async upsertOneTagsOnPosts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneTagsOnPostsArgs,
  ): Promise<TagsOnPosts> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).tagsOnPosts.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
