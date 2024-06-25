import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { CategoriesOnPostsOrderByWithAggregationInput } from '../../../inputs/CategoriesOnPostsOrderByWithAggregationInput'
import { CategoriesOnPostsScalarWhereWithAggregatesInput } from '../../../inputs/CategoriesOnPostsScalarWhereWithAggregatesInput'
import { CategoriesOnPostsWhereInput } from '../../../inputs/CategoriesOnPostsWhereInput'
import { CategoriesOnPostsScalarFieldEnum } from '../../../../enums/CategoriesOnPostsScalarFieldEnum'

@TypeGraphQL.ArgsType()
export class GroupByCategoriesOnPostsArgs {
  @TypeGraphQL.Field((_type) => CategoriesOnPostsWhereInput, {
    nullable: true,
  })
  where?: CategoriesOnPostsWhereInput | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: CategoriesOnPostsOrderByWithAggregationInput[] | undefined

  @TypeGraphQL.Field((_type) => [CategoriesOnPostsScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'postId' | 'categoryId' | 'createdAt' | 'updatedAt'>

  @TypeGraphQL.Field((_type) => CategoriesOnPostsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: CategoriesOnPostsScalarWhereWithAggregatesInput | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined
}
