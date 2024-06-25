import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsCreateInput } from '../../../inputs/CategoriesOnPostsCreateInput'
import { CategoriesOnPostsUpdateInput } from '../../../inputs/CategoriesOnPostsUpdateInput'
import { CategoriesOnPostsWhereUniqueInput } from '../../../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.ArgsType()
export class UpsertOneCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsCreateInput, {
    nullable: false,
  })
  create!: CategoriesOnPostsCreateInput

  @TypeGraphQL.Field((_type) => CategoriesOnPostsUpdateInput, {
    nullable: false,
  })
  update!: CategoriesOnPostsUpdateInput
}
