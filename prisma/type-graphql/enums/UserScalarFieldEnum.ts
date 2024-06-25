import * as TypeGraphQL from 'type-graphql'

export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  nickName = 'nickName',
  email = 'email',
  password = 'password',
  avatar = 'avatar',
  role = 'role',
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
})
