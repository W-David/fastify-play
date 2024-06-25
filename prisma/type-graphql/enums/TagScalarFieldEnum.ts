import * as TypeGraphQL from 'type-graphql'

export enum TagScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
}
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
  name: 'TagScalarFieldEnum',
  description: undefined,
})
