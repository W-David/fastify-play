import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsWhereInput } from '../../inputs/CategoriesOnPostsWhereInput'

@TypeGraphQL.ArgsType()
export class UserCountCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  where?: CategoriesOnPostsWhereInput | undefined
}
