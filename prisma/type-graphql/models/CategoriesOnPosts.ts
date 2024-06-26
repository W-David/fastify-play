import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { Category } from '../models/Category'
import { Post } from '../models/Post'
import { User } from '../models/User'

@TypeGraphQL.ObjectType('CategoriesOnPosts', {})
export class CategoriesOnPosts {
  post?: Post

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  postId!: number

  category?: Category

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  categoryId!: number

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
