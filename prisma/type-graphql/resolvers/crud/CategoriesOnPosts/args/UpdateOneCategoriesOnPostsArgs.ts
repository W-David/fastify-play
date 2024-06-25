import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsUpdateInput } from '../../../inputs/CategoriesOnPostsUpdateInput'
import { CategoriesOnPostsWhereUniqueInput } from '../../../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.ArgsType()
export class UpdateOneCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateInput, {
    nullable: false,
  })
  data!: CategoriesOnPostsUpdateInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput
}
