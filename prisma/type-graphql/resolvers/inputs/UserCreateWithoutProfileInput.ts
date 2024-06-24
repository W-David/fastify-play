import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { PostCreateNestedManyWithoutAuthorInput } from '../inputs/PostCreateNestedManyWithoutAuthorInput'
import { Role } from '../../enums/Role'

@TypeGraphQL.InputType('UserCreateWithoutProfileInput', {})
export class UserCreateWithoutProfileInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string

  @TypeGraphQL.Field((_type) => Role, {
    nullable: true,
  })
  role?: 'ROOT' | 'ADMIN' | 'USER' | undefined

  @TypeGraphQL.Field((_type) => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined
}
