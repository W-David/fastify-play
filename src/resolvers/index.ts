import { AliOSSResolver } from './alioss/index.ts'
import { FileResolver } from './file/index.ts'
import { PostResolver } from './post/index.ts'
import { UserResolver } from './user/index.ts'

// export const resolvers = [UserResolver, AliOSSResolver, PostResolver, FileResolver] as const
export const resolvers = [AliOSSResolver] as const
