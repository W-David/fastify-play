import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsAvgAggregate } from '../outputs/CategoriesOnPostsAvgAggregate'
import { CategoriesOnPostsCountAggregate } from '../outputs/CategoriesOnPostsCountAggregate'
import { CategoriesOnPostsMaxAggregate } from '../outputs/CategoriesOnPostsMaxAggregate'
import { CategoriesOnPostsMinAggregate } from '../outputs/CategoriesOnPostsMinAggregate'
import { CategoriesOnPostsSumAggregate } from '../outputs/CategoriesOnPostsSumAggregate'

@TypeGraphQL.ObjectType('AggregateCategoriesOnPosts', {})
export class AggregateCategoriesOnPosts {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsCountAggregate, {
    nullable: true,
  })
  _count!: CategoriesOnPostsCountAggregate | null

  @TypeGraphQL.Field((_type) => CategoriesOnPostsAvgAggregate, {
    nullable: true,
  })
  _avg!: CategoriesOnPostsAvgAggregate | null

  @TypeGraphQL.Field((_type) => CategoriesOnPostsSumAggregate, {
    nullable: true,
  })
  _sum!: CategoriesOnPostsSumAggregate | null

  @TypeGraphQL.Field((_type) => CategoriesOnPostsMinAggregate, {
    nullable: true,
  })
  _min!: CategoriesOnPostsMinAggregate | null

  @TypeGraphQL.Field((_type) => CategoriesOnPostsMaxAggregate, {
    nullable: true,
  })
  _max!: CategoriesOnPostsMaxAggregate | null
}
