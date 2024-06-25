import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { TagCreateOrConnectWithoutTagsOnPostsInput } from '../inputs/TagCreateOrConnectWithoutTagsOnPostsInput'
import { TagCreateWithoutTagsOnPostsInput } from '../inputs/TagCreateWithoutTagsOnPostsInput'
import { TagUpdateToOneWithWhereWithoutTagsOnPostsInput } from '../inputs/TagUpdateToOneWithWhereWithoutTagsOnPostsInput'
import { TagUpsertWithoutTagsOnPostsInput } from '../inputs/TagUpsertWithoutTagsOnPostsInput'
import { TagWhereUniqueInput } from '../inputs/TagWhereUniqueInput'

@TypeGraphQL.InputType('TagUpdateOneRequiredWithoutTagsOnPostsNestedInput', {})
export class TagUpdateOneRequiredWithoutTagsOnPostsNestedInput {
  @TypeGraphQL.Field((_type) => TagCreateWithoutTagsOnPostsInput, {
    nullable: true,
  })
  create?: TagCreateWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => TagCreateOrConnectWithoutTagsOnPostsInput, {
    nullable: true,
  })
  connectOrCreate?: TagCreateOrConnectWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => TagUpsertWithoutTagsOnPostsInput, {
    nullable: true,
  })
  upsert?: TagUpsertWithoutTagsOnPostsInput | undefined

  @TypeGraphQL.Field((_type) => TagWhereUniqueInput, {
    nullable: true,
  })
  connect?: TagWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => TagUpdateToOneWithWhereWithoutTagsOnPostsInput, {
    nullable: true,
  })
  update?: TagUpdateToOneWithWhereWithoutTagsOnPostsInput | undefined
}
