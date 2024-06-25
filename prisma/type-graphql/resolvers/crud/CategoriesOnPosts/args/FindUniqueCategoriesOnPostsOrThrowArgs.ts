import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsWhereUniqueInput } from '../../../inputs/CategoriesOnPostsWhereUniqueInput'

@TypeGraphQL.ArgsType()
export class FindUniqueCategoriesOnPostsOrThrowArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoriesOnPostsWhereUniqueInput
}
