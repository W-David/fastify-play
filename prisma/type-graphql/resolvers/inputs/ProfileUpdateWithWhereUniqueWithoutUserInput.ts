import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileUpdateWithoutUserInput } from '../inputs/ProfileUpdateWithoutUserInput'
import { ProfileWhereUniqueInput } from '../inputs/ProfileWhereUniqueInput'

@TypeGraphQL.InputType('ProfileUpdateWithWhereUniqueWithoutUserInput', {})
export class ProfileUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ProfileWhereUniqueInput, {
    nullable: false,
  })
  where!: ProfileWhereUniqueInput

  @TypeGraphQL.Field((_type) => ProfileUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ProfileUpdateWithoutUserInput
}
