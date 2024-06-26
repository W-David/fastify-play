export const localConfig = {
  database: {
    dbName: 'coblog',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
  },
  security: {
    secretKey: 'Wang_#86^%q1',
    expiresIn: 60 * 60 * 10,
  },
  alioss: {
    accessKeyId: '',
    accessKeySecret: '',
    roleArn: '',
    tokenExpireTime: 3600,
  },
  admin: {
    email: 'admin@root.com',
    password: 'admin@root',
    nickname: 'admin',
  },
}
