import { $Enums, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  await prisma.post.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.category.deleteMany({})
  await prisma.tag.deleteMany({})
  await prisma.categoriesOnPosts.deleteMany({})
  await prisma.tagsOnPosts.deleteMany({})

  const categoryDatas = [
    { name: 'Technology' },
    { name: 'Programming' },
    { name: 'Design' },

    { name: 'Culture' },
    { name: 'Business' },
    { name: 'Entrepreneurship' },

    { name: 'Productivity' },
    { name: 'Health' },
    { name: 'Fitness' },

    { name: 'Food' },
    { name: 'Travel' },
    { name: 'Art' },
  ]

  const tagDatas = [
    { name: 'React' },
    { name: 'Vue.js' },
    { name: 'Angular' },
    { name: 'GraphQL' },
    { name: 'Prisma' },

    { name: 'Node.js' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Java' },

    { name: 'Swift' },
    { name: 'Kotlin' },
    { name: 'Go' },
    { name: 'Clojure' },
    { name: 'C#' },

    { name: 'C++' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Sass' },
    { name: 'Less' },
  ]

  const root = await prisma.user.create({
    data: {
      email: 'root@root.com',
      nickName: 'root',
      password: 'root',
      role: $Enums.Role.ROOT,
      posts: {
        create: [],
      },
    },
  })

  const admin = await prisma.user.create({
    data: {
      email: 'admin@root.com',
      nickName: 'admin',
      password: 'admin',
      role: $Enums.Role.ADMIN,
      posts: {
        create: [],
      },
    },
  })

  const user = await prisma.user.create({
    data: {
      email: 'user@root.com',
      nickName: 'user',
      password: 'user',
      role: $Enums.Role.USER,
      posts: {
        create: [],
      },
    },
  })

  await prisma.category.createMany({ data: categoryDatas })

  await prisma.tag.createMany({ data: tagDatas })

  await prisma.post.createMany({
    data: [
      {
        title: 'Subscribe to GraphQL Weekly for community news',
        description: 'Get the latest news about GraphQL, GraphQL Weekly, and community events.',
        content: 'https://graphqlweekly.com/',
        authorId: root.id,
        createdAt: new Date('2024-01-01 08:00:00'),
        updatedAt: new Date('2024-01-01 08:00:00'),
        published: true,
      },
      {
        title: 'Follow Prisma on Twitter',
        description: 'Learn how to build a GraphQL server with Prisma',
        content: 'https://twitter.com/prisma',
        authorId: root.id,
        createdAt: new Date('2024-01-05 10:00:00'),
        updatedAt: new Date('2024-01-05 08:00:00'),
        published: false,
      },
      {
        title: 'Join us for Prisma Day 2019 in Berlin',
        description: 'Learn about Prisma and GraphQL in a hands-on session.',
        content: 'https://www.prisma.io/day/',
        authorId: admin.id,
        createdAt: new Date('2024-01-10 12:00:00'),
        updatedAt: new Date('2024-01-10 12:00:00'),
        published: true,
      },
      {
        title: 'Join us for Prisma Day 2020 in Berlin',
        description: 'Learn about Prisma and GraphQL in a hands-on session.',
        content: 'https://www.prisma.io/day/',
        authorId: admin.id,
        createdAt: new Date('2024-02-01 14:00:00'),
        updatedAt: new Date('2024-02-01 14:00:00'),
        published: false,
      },
      {
        title: 'GraphQL is awesome',
        description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with data.',
        content: 'https://graphql.org/',
        published: true,
        createdAt: new Date('2023-01-01 16:00:00'),
        updatedAt: new Date('2023-01-01 16:00:00'),
        authorId: user.id,
      },
      {
        title: 'Prisma is awesome',
        description: 'Prisma is a database toolkit that makes it easy to build type-safe, data-driven applications.',
        content: 'https://www.prisma.io/',
        published: false,
        createdAt: new Date('2023-02-01 18:00:00'),
        updatedAt: new Date('2023-02-01 18:00:00'),
        authorId: user.id,
      },
    ],
  })

  const categories = await prisma.category.findMany({})
  const tags = await prisma.tag.findMany({})
  const posts = await prisma.post.findMany({})

  await prisma.categoriesOnPosts.createMany({
    data: [
      {
        postId: posts[0].id,
        categoryId: categories[1].id,
        createdById: root.id,
      },
      {
        postId: posts[1].id,
        categoryId: categories[1].id,
        createdById: root.id,
      },
      {
        postId: posts[2].id,
        categoryId: categories[1].id,
        createdById: root.id,
      },
      {
        postId: posts[3].id,
        categoryId: categories[1].id,
        createdById: root.id,
      },
      {
        postId: posts[4].id,
        categoryId: categories[1].id,
        createdById: root.id,
      },
      {
        postId: posts[5].id,
        categoryId: categories[1].id,
        createdById: root.id,
      },
    ],
  })

  await prisma.tagsOnPosts.createMany({
    data: [
      {
        postId: posts[0].id,
        tagId: tags[0].id,
        createdById: root.id,
      },
      {
        postId: posts[0].id,
        tagId: tags[1].id,
        createdById: root.id,
      },
      {
        postId: posts[0].id,
        tagId: tags[2].id,
        createdById: root.id,
      },
      {
        postId: posts[0].id,
        tagId: tags[3].id,
        createdById: root.id,
      },
      {
        postId: posts[0].id,
        tagId: tags[4].id,
        createdById: root.id,
      },
      {
        postId: posts[1].id,
        tagId: tags[5].id,
        createdById: root.id,
      },
      {
        postId: posts[1].id,
        tagId: tags[6].id,
        createdById: root.id,
      },
      {
        postId: posts[1].id,
        tagId: tags[7].id,
        createdById: root.id,
      },
      {
        postId: posts[1].id,
        tagId: tags[8].id,
        createdById: root.id,
      },
      {
        postId: posts[1].id,
        tagId: tags[9].id,
        createdById: root.id,
      },
    ],
  })

  console.log('seed all done!')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
