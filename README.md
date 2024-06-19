# fastify-play

基于 Fastify (mercurius + type-graphql) 构建 Prisma 的 Graphql 查询服务 (ORM功能全部导出，包括 Model/Relation/Query/Mutation)


## 环境安装
```shell
$ npm install
```


```shell
# 数据库初始化
$ npm run prisma:migrate  
```

```shell
# 生成 @prisma/client, typegraphql-prisma 生成CRUD业务代码
$ npm run prisma:generate 
```

```shell
# 填充测试数据
$ npm run seed 
```

```shell
# 启动 fastify 服务
$ npm run dev  
```

## prisma studio

Prisma 自带一个 studio web UI，可直接管理数据源。

```shell
npm run studio
```