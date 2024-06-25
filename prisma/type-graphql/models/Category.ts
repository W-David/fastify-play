import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { CategoriesOnPosts } from '../models/CategoriesOnPosts'
import { CategoryCount } from '../resolvers/outputs/CategoryCount'

@TypeGraphQL.ObjectType('Category', {})
export class Category {
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

  CategoriesOnPosts?: CategoriesOnPosts[]

  @TypeGraphQL.Field((_type) => CategoryCount, {
    nullable: true,
  })
  _count?: CategoryCount | null
}
