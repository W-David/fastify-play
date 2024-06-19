import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileCreateManyUserInput } from '../inputs/ProfileCreateManyUserInput'

@TypeGraphQL.InputType('ProfileCreateManyUserInputEnvelope', {})
export class ProfileCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ProfileCreateManyUserInput], {
    nullable: false,
  })
  data!: ProfileCreateManyUserInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
