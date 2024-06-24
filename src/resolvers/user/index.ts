import { User } from '@typegraphql/models/User'
import { Args, ArgsType, Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql'
import { Context } from './../../plugins/apollo/index'

@ObjectType()
export class AuthRes {
  @Field(() => String)
  token!: string
}

@ArgsType()
export class AuthArgs {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string
}

@ObjectType()
export class DecodeRes {
  @Field(() => String)
  name!: string

  @Field(() => String)
  email!: string

  @Field(() => String)
  role!: string
}

@Resolver((_of) => User)
export class UserResolver {
  @Query((_returns) => AuthRes, { nullable: true })
  async auth(@Ctx() { prisma, fastify }: Context, @Args() args: AuthArgs): Promise<AuthRes | null> {
    const { email, password } = args
    const user = await prisma.user.findUnique({ where: { email, password } })
    if (!user) {
      throw new Error('User not found')
    } else {
      const { name, email, role } = user
      const token = fastify.jwt.sign({
        name,
        email,
        role,
      })
      return { token }
    }
  }
  @Query((_returns) => DecodeRes, { nullable: true })
  async decode(@Ctx() { req, fastify }: Context): Promise<DecodeRes | null> {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      throw new Error('Token not found')
    } else {
      const decoded = fastify.jwt.verify(token)
      const { name, email, role } = decoded as { name: string; email: string; role: string }
      return {
        name,
        email,
        role,
      }
    }
  }
}
