import * as TypeGraphQL from 'type-graphql'

export enum ProfileScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  bio = 'bio',
  userId = 'userId',
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: 'ProfileScalarFieldEnum',
  description: undefined,
})
