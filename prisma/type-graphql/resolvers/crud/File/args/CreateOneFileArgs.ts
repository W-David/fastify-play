import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { FileCreateInput } from '../../../inputs/FileCreateInput'

@TypeGraphQL.ArgsType()
export class CreateOneFileArgs {
  @TypeGraphQL.Field((_type) => FileCreateInput, {
    nullable: false,
  })
  data!: FileCreateInput
}
