import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { Post } from '../models/Post'
import { Tag } from '../models/Tag'
import { User } from '../models/User'

@TypeGraphQL.ObjectType('TagsOnPosts', {})
export class TagsOnPosts {
  post?: Post

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  postId!: number

  tag?: Tag

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  tagId!: number

  createdBy?: User

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  createdById!: number

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date
}