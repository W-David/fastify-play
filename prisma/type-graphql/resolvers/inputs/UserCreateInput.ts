import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { CategoriesOnPostsCreateNestedManyWithoutCreatedByInput } from '../inputs/CategoriesOnPostsCreateNestedManyWithoutCreatedByInput'
import { PostCreateNestedManyWithoutAuthorInput } from '../inputs/PostCreateNestedManyWithoutAuthorInput'
import { TagsOnPostsCreateNestedManyWithoutCreatedByInput } from '../inputs/TagsOnPostsCreateNestedManyWithoutCreatedByInput'
import { Role } from '../../enums/Role'

@TypeGraphQL.InputType('UserCreateInput', {})
export class UserCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  nickName?: string | undefined

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  avatar?: string | undefined

  @TypeGraphQL.Field((_type) => Role, {
    nullable: true,
  })
  role?: 'ROOT' | 'ADMIN' | 'USER' | undefined

  @TypeGraphQL.Field((_type) => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateNestedManyWithoutCreatedByInput, {
    nullable: true,
  })
  CategoriesOnPosts?: CategoriesOnPostsCreateNestedManyWithoutCreatedByInput | undefined

  @TypeGraphQL.Field((_type) => TagsOnPostsCreateNestedManyWithoutCreatedByInput, {
    nullable: true,
  })
  TagsOnPosts?: TagsOnPostsCreateNestedManyWithoutCreatedByInput | undefined
}
