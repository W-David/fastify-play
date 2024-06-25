import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { TagsOnPosts } from '../models/TagsOnPosts'
import { TagCount } from '../resolvers/outputs/TagCount'

@TypeGraphQL.ObjectType('Tag', {})
export class Tag {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string

  TagsOnPosts?: TagsOnPosts[]

  @TypeGraphQL.Field((_type) => TagCount, {
    nullable: true,
  })
  _count?: TagCount | null
}
