import { AuthChecker } from 'type-graphql'
import { Context } from '../apollo'

export const authChecker: AuthChecker<Context> = ({ root, args, context, info }, roles) => {
  const { user } = context
  if (info.fieldName === 'auth') {
    return true
  }
  return roles.includes(user.role)
}
