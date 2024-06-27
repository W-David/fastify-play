import { AliOSSResolver } from './alioss'
import { FileResolver } from './file'
import { PostResolver } from './post'
import { UserResolver } from './user'

export const resolvers = [UserResolver, AliOSSResolver, PostResolver, FileResolver]
