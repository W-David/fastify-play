import * as TypeGraphQL from 'type-graphql'

export enum CategoriesOnPostsScalarFieldEnum {
  postId = 'postId',
  categoryId = 'categoryId',
  createdById = 'createdById',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(CategoriesOnPostsScalarFieldEnum, {
  name: 'CategoriesOnPostsScalarFieldEnum',
  description: undefined,
})