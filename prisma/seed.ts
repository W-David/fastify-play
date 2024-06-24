import { $Enums, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  await prisma.profile.deleteMany({})
  await prisma.post.deleteMany({})
  await prisma.user.deleteMany({})

  const root = await prisma.user.create({
    data: {
      email: 'root@root.com',
      name: 'root',
      password: 'root',
      role: $Enums.Role.ROOT,
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: false,
          },
        ],
      },
      profile: {
        create: {
          bio: 'I am a root',
        },
      },
    },
  })

  const admin = await prisma.user.create({
    data: {
      email: 'admin@root.com',
      name: 'admin',
      password: 'admin',
      role: $Enums.Role.ADMIN,
      posts: {
        create: [
          {
            title: 'Join us for Prisma Day 2019 in Berlin',
            content: 'https://www.prisma.io/day/',
            published: true,
          },
          {
            title: 'Join us for Prisma Day 2020 in Berlin',
            content: 'https://www.prisma.io/day/',
            published: false,
          },
        ],
      },
      profile: {
        create: {
          bio: 'I am an admin',
        },
      },
    },
  })

  const user = await prisma.user.create({
    data: {
      email: 'user@root.com',
      name: 'user',
      password: 'user',
      role: $Enums.Role.USER,
      posts: {
        create: [
          {
            title: 'GraphQL is awesome',
            content: 'https://graphql.org/',
            published: true,
          },
          {
            title: 'Prisma is awesome',
            content: 'https://www.prisma.io/',
            published: false,
          },
        ],
      },
      profile: {
        create: {
          bio: 'I am a user',
        },
      },
    },
  })

  console.log({ root, admin, user })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
