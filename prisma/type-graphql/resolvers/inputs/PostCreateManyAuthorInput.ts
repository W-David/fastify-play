import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'

@TypeGraphQL.InputType('PostCreateManyAuthorInput', {})
export class PostCreateManyAuthorInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined

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
}
