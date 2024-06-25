import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsCreateManyInput } from '../../../inputs/CategoriesOnPostsCreateManyInput'

@TypeGraphQL.ArgsType()
export class CreateManyCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => [CategoriesOnPostsCreateManyInput], {
    nullable: false,
  })
  data!: CategoriesOnPostsCreateManyInput[]

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined
}
