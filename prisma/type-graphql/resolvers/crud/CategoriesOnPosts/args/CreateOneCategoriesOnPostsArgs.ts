import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsCreateInput } from '../../../inputs/CategoriesOnPostsCreateInput'

@TypeGraphQL.ArgsType()
export class CreateOneCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateInput, {
    nullable: false,
  })
  data!: CategoriesOnPostsCreateInput
}
