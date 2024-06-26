import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateNestedManyWithoutPostInput } from '../inputs/CategoriesOnPostsCreateNestedManyWithoutPostInput'
import { UserCreateNestedOneWithoutPostsInput } from '../inputs/UserCreateNestedOneWithoutPostsInput'

@TypeGraphQL.InputType('PostCreateWithoutTagsOnPostsInput', {})
export class PostCreateWithoutTagsOnPostsInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | undefined

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  published?: boolean | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  favoNum?: number | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  browNum?: number | undefined

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutPostsInput, {
    nullable: false,
  })
  author!: UserCreateNestedOneWithoutPostsInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsCreateNestedManyWithoutPostInput | undefined
}