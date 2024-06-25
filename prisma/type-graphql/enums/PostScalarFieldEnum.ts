import * as TypeGraphQL from 'type-graphql'

export enum PostScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
  description = 'description',
  content = 'content',
  published = 'published',
  favoNum = 'favoNum',
  browNum = 'browNum',
  authorId = 'authorId',
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined,
})
