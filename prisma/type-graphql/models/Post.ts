import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { CategoriesOnPosts } from '../models/CategoriesOnPosts'
import { TagsOnPosts } from '../models/TagsOnPosts'
import { User } from '../models/User'
import { PostCount } from '../resolvers/outputs/PostCount'

@TypeGraphQL.ObjectType('Post', {})
export class Post {
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
  title!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | null

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | null

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  published!: boolean

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  favoNum!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  browNum!: number

  author?: User

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  authorId!: number

  CategoriesOnPosts?: CategoriesOnPosts[]

  TagsOnPosts?: TagsOnPosts[]

  @TypeGraphQL.Field((_type) => PostCount, {
    nullable: true,
  })
  _count?: PostCount | null
}
