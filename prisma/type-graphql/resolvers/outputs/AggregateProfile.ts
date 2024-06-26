import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileAvgAggregate } from '../outputs/ProfileAvgAggregate'
import { ProfileCountAggregate } from '../outputs/ProfileCountAggregate'
import { ProfileMaxAggregate } from '../outputs/ProfileMaxAggregate'
import { ProfileMinAggregate } from '../outputs/ProfileMinAggregate'
import { ProfileSumAggregate } from '../outputs/ProfileSumAggregate'

@TypeGraphQL.ObjectType('AggregateProfile', {})
export class AggregateProfile {
  @TypeGraphQL.Field((_type) => ProfileCountAggregate, {
    nullable: true,
  })
  _count!: ProfileCountAggregate | null

  @TypeGraphQL.Field((_type) => ProfileAvgAggregate, {
    nullable: true,
  })
  _avg!: ProfileAvgAggregate | null

  @TypeGraphQL.Field((_type) => ProfileSumAggregate, {
    nullable: true,
  })
  _sum!: ProfileSumAggregate | null

  @TypeGraphQL.Field((_type) => ProfileMinAggregate, {
    nullable: true,
  })
  _min!: ProfileMinAggregate | null

  @TypeGraphQL.Field((_type) => ProfileMaxAggregate, {
    nullable: true,
  })
  _max!: ProfileMaxAggregate | null
}
