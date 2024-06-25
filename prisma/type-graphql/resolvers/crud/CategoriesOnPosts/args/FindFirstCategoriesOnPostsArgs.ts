import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsOrderByWithRelationInput } from '../../../inputs/CategoriesOnPostsOrderByWithRelationInput'
import { CategoriesOnPostsWhereInput } from '../../../inputs/CategoriesOnPostsWhereInput'
import { CategoriesOnPostsWhereUniqueInput } from '../../../inputs/CategoriesOnPostsWhereUniqueInput'
import { CategoriesOnPostsScalarFieldEnum } from '../../../../enums/CategoriesOnPostsScalarFieldEnum'

@TypeGraphQL.ArgsType()
export class FindFirstCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  where?: CategoriesOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CategoriesOnPostsOrderByWithRelationInput[] | undefined

  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CategoriesOnPostsWhereUniqueInput | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'postId' | 'categoryId' | 'createdAt' | 'updatedAt'> | undefined
}
