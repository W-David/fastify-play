import { localConfig } from '@/config'
import { STS } from 'ali-oss'
import { Field, ObjectType, Query, Resolver } from 'type-graphql'

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
  async sts(): Promise<STSRes | null> {
    const {
      alioss: { accessKeyId, accessKeySecret, roleArn, tokenExpireTime },
    } = localConfig
    const client = new STS({
      accessKeyId,
      accessKeySecret,
    })
    const { credentials } = await client.assumeRole(roleArn, undefined, tokenExpireTime)
    return {
      AccesskeyId: credentials.AccessKeyId,
      AccessKeySecret: credentials.AccessKeySecret,
      SecurityToken: credentials.SecurityToken,
      Expiration: credentials.Expiration,
    }
  }
}
