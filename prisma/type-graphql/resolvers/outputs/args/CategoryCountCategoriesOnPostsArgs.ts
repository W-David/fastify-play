import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsWhereInput } from '../../inputs/CategoriesOnPostsWhereInput'

@TypeGraphQL.ArgsType()
export class CategoryCountCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  where?: CategoriesOnPostsWhereInput | undefined
}
