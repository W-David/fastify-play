import { EnvType } from '@/plugins/env'
import { User } from '@typegraphql'
import { Args, ArgsType, Authorized, Ctx, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { Context } from '@/plugins/apollo'
import { $Enums } from '@prisma/client'

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

@ArgsType()
export class RegisterArgs {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string

  @Field(() => String, { nullable: true })
  nickName?: string

  @Field(() => String)
  role!: $Enums.Role
}

@ObjectType()
export class DecodeRes {
  @Field(() => String)
  name?: string

  @Field(() => String)
  email!: string

  @Field(() => String)
  role!: string
}

@Resolver((_of) => User)
export class UserResolver {
  @Query((_returns) => AuthRes, { nullable: true })
  @Authorized()
  async login(@Ctx() { prisma, fastify }: Context, @Args() args: AuthArgs): Promise<AuthRes | null> {
    const { email, password } = args
    const user = await prisma.user.findUnique({ where: { email, password } })
    if (!user) {
      throw new Error('User not found')
    } else {
      const { TOKEN_EXPIRATION_TIME } = fastify.getEnvs<EnvType>()
      const token = fastify.jwt.sign(
        {
          name: user.nickName || 'anonymous',
          email: user.email,
          role: user.role,
        },
        {
          expiresIn: TOKEN_EXPIRATION_TIME,
        },
      )
      return { token }
    }
  }
  @Query((_returns) => User, { nullable: true })
  async auth(@Ctx() { req, fastify, prisma }: Context): Promise<User | null> {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      throw new Error('Token not found')
    } else {
      const decoded = fastify.jwt.verify(token)
      const { name, email, role } = decoded as { name: string; email: string; role: $Enums.Role }
      const user = await prisma.user.findUnique({ where: { nickName: name, email, role } })
      return user
    }
  }
  @Mutation((_returns) => AuthRes)
  async register(@Ctx() { prisma, fastify }: Context, @Args() args: RegisterArgs): Promise<AuthRes | null> {
    const hasUser = await prisma.user.findUnique({ where: { email: args.email } })
    if (hasUser) {
      throw new Error('User already exists')
    } else {
      const { email, password, nickName, role } = args
      const user = await prisma.user.create({
        data: {
          email,
          password,
          nickName,
          role,
        },
      })
      const { TOKEN_EXPIRATION_TIME } = fastify.getEnvs<EnvType>()
      const token = fastify.jwt.sign(
        {
          name: user.nickName || 'anonymous',
          email: user.email,
          role: user.role,
        },
        {
          expiresIn: TOKEN_EXPIRATION_TIME,
        },
      )
      return { token }
    }
  }
}
