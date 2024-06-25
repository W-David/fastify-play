import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagsOnPostsAvgAggregate } from '../outputs/TagsOnPostsAvgAggregate'
import { TagsOnPostsCountAggregate } from '../outputs/TagsOnPostsCountAggregate'
import { TagsOnPostsMaxAggregate } from '../outputs/TagsOnPostsMaxAggregate'
import { TagsOnPostsMinAggregate } from '../outputs/TagsOnPostsMinAggregate'
import { TagsOnPostsSumAggregate } from '../outputs/TagsOnPostsSumAggregate'

@TypeGraphQL.ObjectType('AggregateTagsOnPosts', {})
export class AggregateTagsOnPosts {
  @TypeGraphQL.Field((_type) => TagsOnPostsCountAggregate, {
    nullable: true,
  })
  _count!: TagsOnPostsCountAggregate | null

  @TypeGraphQL.Field((_type) => TagsOnPostsAvgAggregate, {
    nullable: true,
  })
  _avg!: TagsOnPostsAvgAggregate | null

  @TypeGraphQL.Field((_type) => TagsOnPostsSumAggregate, {
    nullable: true,
  })
  _sum!: TagsOnPostsSumAggregate | null

  @TypeGraphQL.Field((_type) => TagsOnPostsMinAggregate, {
    nullable: true,
  })
  _min!: TagsOnPostsMinAggregate | null

  @TypeGraphQL.Field((_type) => TagsOnPostsMaxAggregate, {
    nullable: true,
  })
  _max!: TagsOnPostsMaxAggregate | null
}
