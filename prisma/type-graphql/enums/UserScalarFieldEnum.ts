import * as TypeGraphQL from 'type-graphql'

export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
  email = 'email',
  password = 'password',
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
})
