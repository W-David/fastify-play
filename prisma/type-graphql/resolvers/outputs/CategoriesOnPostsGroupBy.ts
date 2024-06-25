import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsAvgAggregate } from '../outputs/CategoriesOnPostsAvgAggregate'
import { CategoriesOnPostsCountAggregate } from '../outputs/CategoriesOnPostsCountAggregate'
import { CategoriesOnPostsMaxAggregate } from '../outputs/CategoriesOnPostsMaxAggregate'
import { CategoriesOnPostsMinAggregate } from '../outputs/CategoriesOnPostsMinAggregate'
import { CategoriesOnPostsSumAggregate } from '../outputs/CategoriesOnPostsSumAggregate'

@TypeGraphQL.ObjectType('CategoriesOnPostsGroupBy', {})
export class CategoriesOnPostsGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  postId!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  categoryId!: number

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date

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
