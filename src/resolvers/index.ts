import { AliOSSResolver } from './alioss'
import { PostResolver } from './post'
import { UserResolver } from './user'

export const resolvers = [UserResolver, AliOSSResolver, PostResolver] as const
