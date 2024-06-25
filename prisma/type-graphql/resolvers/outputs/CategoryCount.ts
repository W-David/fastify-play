import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoryCountCategoriesOnPostsArgs } from './args/CategoryCountCategoriesOnPostsArgs'

@TypeGraphQL.ObjectType('CategoryCount', {})
export class CategoryCount {
  CategoriesOnPosts!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'CategoriesOnPosts',
    nullable: false,
  })
  getCategoriesOnPosts(@TypeGraphQL.Root() root: CategoryCount, @TypeGraphQL.Args() args: CategoryCountCategoriesOnPostsArgs): number {
    return root.CategoriesOnPosts
  }
}
