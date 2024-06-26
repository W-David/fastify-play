import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { DateTimeFilter } from '../inputs/DateTimeFilter'
import { IntFilter } from '../inputs/IntFilter'

@TypeGraphQL.InputType('TagsOnPostsScalarWhereInput', {})
export class TagsOnPostsScalarWhereInput {
  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereInput], {
    nullable: true,
  })
  AND?: TagsOnPostsScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereInput], {
    nullable: true,
  })
  OR?: TagsOnPostsScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => [TagsOnPostsScalarWhereInput], {
    nullable: true,
  })
  NOT?: TagsOnPostsScalarWhereInput[] | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  postId?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  tagId?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  createdById?: IntFilter | undefined

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined
}
