import * as TypeGraphQL from 'type-graphql'

export enum FileScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
  path = 'path',
  extension = 'extension',
  size = 'size',
}
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
  name: 'FileScalarFieldEnum',
  description: undefined,
})
