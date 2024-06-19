import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileCreateWithoutUserInput } from '../inputs/ProfileCreateWithoutUserInput'
import { ProfileUpdateWithoutUserInput } from '../inputs/ProfileUpdateWithoutUserInput'
import { ProfileWhereUniqueInput } from '../inputs/ProfileWhereUniqueInput'

@TypeGraphQL.InputType('ProfileUpsertWithWhereUniqueWithoutUserInput', {})
export class ProfileUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ProfileWhereUniqueInput, {
    nullable: false,
  })
  where!: ProfileWhereUniqueInput

  @TypeGraphQL.Field((_type) => ProfileUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ProfileUpdateWithoutUserInput

  @TypeGraphQL.Field((_type) => ProfileCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ProfileCreateWithoutUserInput
}
