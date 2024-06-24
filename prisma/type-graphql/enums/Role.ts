import * as TypeGraphQL from 'type-graphql'

export enum Role {
  ROOT = 'ROOT',
  ADMIN = 'ADMIN',
  USER = 'USER',
}
TypeGraphQL.registerEnumType(Role, {
  name: 'Role',
  description: undefined,
})
