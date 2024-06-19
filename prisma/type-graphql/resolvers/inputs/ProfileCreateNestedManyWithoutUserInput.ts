import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileCreateManyUserInputEnvelope } from '../inputs/ProfileCreateManyUserInputEnvelope'
import { ProfileCreateOrConnectWithoutUserInput } from '../inputs/ProfileCreateOrConnectWithoutUserInput'
import { ProfileCreateWithoutUserInput } from '../inputs/ProfileCreateWithoutUserInput'
import { ProfileWhereUniqueInput } from '../inputs/ProfileWhereUniqueInput'

@TypeGraphQL.InputType('ProfileCreateNestedManyWithoutUserInput', {})
export class ProfileCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ProfileCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ProfileCreateWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => ProfileCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ProfileCreateManyUserInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereUniqueInput], {
    nullable: true,
  })
  connect?: ProfileWhereUniqueInput[] | undefined
}
