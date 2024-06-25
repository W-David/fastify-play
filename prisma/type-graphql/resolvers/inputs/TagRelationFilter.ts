import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagWhereInput } from '../inputs/TagWhereInput'

@TypeGraphQL.InputType('TagRelationFilter', {})
export class TagRelationFilter {
  @TypeGraphQL.Field((_type) => TagWhereInput, {
    nullable: true,
  })
  is?: TagWhereInput | undefined

  @TypeGraphQL.Field((_type) => TagWhereInput, {
    nullable: true,
  })
  isNot?: TagWhereInput | undefined
}
