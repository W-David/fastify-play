import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { CategoriesOnPosts } from '../models/CategoriesOnPosts'
import { Post } from '../models/Post'
import { TagsOnPosts } from '../models/TagsOnPosts'
import { Role } from '../enums/Role'
import { UserCount } from '../resolvers/outputs/UserCount'

@TypeGraphQL.ObjectType('User', {})
export class User {
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
    nullable: true,
  })
  nickName?: string | null

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string

  password?: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  avatar?: string | null

  @TypeGraphQL.Field((_type) => Role, {
    nullable: false,
  })
  role!: 'ROOT' | 'ADMIN' | 'USER'

  posts?: Post[]

  CategoriesOnPosts?: CategoriesOnPosts[]

  TagsOnPosts?: TagsOnPosts[]

  @TypeGraphQL.Field((_type) => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null
}
