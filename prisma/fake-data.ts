import { Role } from '@prisma/client'
import { faker } from '@faker-js/faker'
import Decimal from 'decimal.js'

export function fakePost() {
  return {
    updatedAt: faker.date.anytime(),
    title: faker.lorem.words(5),
    description: undefined,
    content: undefined,
  }
}
export function fakePostComplete() {
  return {
    id: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    title: faker.lorem.words(5),
    description: undefined,
    content: undefined,
    published: false,
    favoNum: 0,
    browNum: 0,
    authorId: faker.number.int(),
  }
}
export function fakeFile() {
  return {
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
    path: faker.lorem.words(5),
    extension: faker.lorem.words(5),
  }
}
export function fakeFileComplete() {
  return {
    id: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
    path: faker.lorem.words(5),
    extension: faker.lorem.words(5),
    size: 0,
  }
}
export function fakeTag() {
  return {
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
  }
}
export function fakeTagComplete() {
  return {
    id: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
  }
}
export function fakeCategory() {
  return {
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
  }
}
export function fakeCategoryComplete() {
  return {
    id: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
  }
}
export function fakeCategoriesOnPosts() {
  return {
    updatedAt: faker.date.anytime(),
  }
}
export function fakeCategoriesOnPostsComplete() {
  return {
    postId: faker.number.int(),
    categoryId: faker.number.int(),
    createdById: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  }
}
export function fakeTagsOnPosts() {
  return {
    updatedAt: faker.date.anytime(),
  }
}
export function fakeTagsOnPostsComplete() {
  return {
    postId: faker.number.int(),
    tagId: faker.number.int(),
    createdById: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  }
}
export function fakeUser() {
  return {
    updatedAt: faker.date.anytime(),
    nickName: undefined,
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    avatar: undefined,
  }
}
export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    nickName: undefined,
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    avatar: undefined,
    role: Role.USER,
  }
}
