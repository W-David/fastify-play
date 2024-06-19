import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { ProfileCreateManyUserInputEnvelope } from '../inputs/ProfileCreateManyUserInputEnvelope'
import { ProfileCreateOrConnectWithoutUserInput } from '../inputs/ProfileCreateOrConnectWithoutUserInput'
import { ProfileCreateWithoutUserInput } from '../inputs/ProfileCreateWithoutUserInput'
import { ProfileScalarWhereInput } from '../inputs/ProfileScalarWhereInput'
import { ProfileUpdateManyWithWhereWithoutUserInput } from '../inputs/ProfileUpdateManyWithWhereWithoutUserInput'
import { ProfileUpdateWithWhereUniqueWithoutUserInput } from '../inputs/ProfileUpdateWithWhereUniqueWithoutUserInput'
import { ProfileUpsertWithWhereUniqueWithoutUserInput } from '../inputs/ProfileUpsertWithWhereUniqueWithoutUserInput'
import { ProfileWhereUniqueInput } from '../inputs/ProfileWhereUniqueInput'

@TypeGraphQL.InputType('ProfileUpdateManyWithoutUserNestedInput', {})
export class ProfileUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [ProfileCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ProfileCreateWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => ProfileCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ProfileCreateManyUserInputEnvelope | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereUniqueInput], {
    nullable: true,
  })
  set?: ProfileWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ProfileWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereUniqueInput], {
    nullable: true,
  })
  delete?: ProfileWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileWhereUniqueInput], {
    nullable: true,
  })
  connect?: ProfileWhereUniqueInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: ProfileUpdateWithWhereUniqueWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: ProfileUpdateManyWithWhereWithoutUserInput[] | undefined

  @TypeGraphQL.Field((_type) => [ProfileScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ProfileScalarWhereInput[] | undefined
}
