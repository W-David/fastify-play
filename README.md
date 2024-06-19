# fastify-prisma-gql-serve-example

基于 Fastify (mercurius + type-graphql) 构建 Prisma 的 Graphql 查询服务 (ORM功能全部导出，包括 Model/Relation/Query/Mutation) 示例。

参考阅读：

- [从零开始搭建](docs/0.START_FROM_SCRATCH.md)

## 环境安装

```shell
npm install
# or
yarn install
# or
pnpm install
```

```shell
npm run generate # 生成 @prisma/client
npm run fastify  # 启动 fastify 服务
# or
yarn run generate
npm run fastify
# or
pnpm run generate
npm run fastify
```

打开浏览器访问：

- [mercurius 自带的 graphiql](http://localhost:8082/graphiql)
- [本示例附带的 graphql-playground-react](http://localhost:8082/gql-client/?endpoint=http://localhost:8082/graphql)

![screenshot_1](img/screenshot_1.png)

![screenshot_2](img/screenshot_2.png)

![screenshot_3](img/screenshot_3.png)

综合来说 graphql-playground-react 的代码提示比较完善，连 Query Vars 的 JSON 也可以自动提示。

除此之外，还可以使用 Apollo Studio，不过需要额外向 Apollo 暴露本地的接口地址（真不厚道）。

## prisma studio

Prisma 自带一个 studio web UI，可直接管理数据源。

```shell
npm run studio
# or
yarn run studio
# or
pnpm run studio
```

[prisma studio](http://localhost:5555/)

![screenshot_4](img/screenshot_4.png)

![screenshot_5](img/screenshot_5.png)
