import { EnvType } from '@/plugins/env'
import { STS } from 'ali-oss'
import { Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql'
import { Context } from './../../plugins/apollo/index'

@ObjectType()
export class STSRes {
  @Field(() => String)
  AccesskeyId!: string
  @Field(() => String)
  AccessKeySecret!: string
  @Field(() => String)
  SecurityToken!: string
  @Field(() => String)
  Expiration!: string
}

@Resolver()
export class AliOSSResolver {
  @Query(() => STSRes, { nullable: true })
  async sts(@Ctx() { fastify }: Context): Promise<STSRes | null> {
    const { ALIOSS_ACCESS_KEY_ID, ALIOSS_ACCESS_KEY_SECRET, ALIOSS_ROLE_ARN, ALIOSS_TOKEN_EXPIRE_TIME } = fastify.getEnvs<EnvType>()
    const client = new STS({
      accessKeyId: ALIOSS_ACCESS_KEY_ID,
      accessKeySecret: ALIOSS_ACCESS_KEY_SECRET,
    })
    const { credentials } = await client.assumeRole(ALIOSS_ROLE_ARN, undefined, ALIOSS_TOKEN_EXPIRE_TIME)
    return {
      AccesskeyId: credentials.AccessKeyId,
      AccessKeySecret: credentials.AccessKeySecret,
      SecurityToken: credentials.SecurityToken,
      Expiration: credentials.Expiration,
    }
  }
}
