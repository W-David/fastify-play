import { ClassType } from 'type-graphql'
import * as tslib from 'tslib'
import * as crudResolvers from './resolvers/crud/resolvers-crud.index'
import * as argsTypes from './resolvers/crud/args.index'
import * as actionResolvers from './resolvers/crud/resolvers-actions.index'
import * as relationResolvers from './resolvers/relations/resolvers.index'
import * as models from './models'
import * as outputTypes from './resolvers/outputs'
import * as inputTypes from './resolvers/inputs'

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[]

const crudResolversMap = {
  Post: crudResolvers.PostCrudResolver,
  File: crudResolvers.FileCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  CategoriesOnPosts: crudResolvers.CategoriesOnPostsCrudResolver,
  TagsOnPosts: crudResolvers.TagsOnPostsCrudResolver,
  User: crudResolvers.UserCrudResolver,
}
const actionResolversMap = {
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver,
  },
  File: {
    aggregateFile: actionResolvers.AggregateFileResolver,
    createManyFile: actionResolvers.CreateManyFileResolver,
    createOneFile: actionResolvers.CreateOneFileResolver,
    deleteManyFile: actionResolvers.DeleteManyFileResolver,
    deleteOneFile: actionResolvers.DeleteOneFileResolver,
    findFirstFile: actionResolvers.FindFirstFileResolver,
    findFirstFileOrThrow: actionResolvers.FindFirstFileOrThrowResolver,
    files: actionResolvers.FindManyFileResolver,
    file: actionResolvers.FindUniqueFileResolver,
    getFile: actionResolvers.FindUniqueFileOrThrowResolver,
    groupByFile: actionResolvers.GroupByFileResolver,
    updateManyFile: actionResolvers.UpdateManyFileResolver,
    updateOneFile: actionResolvers.UpdateOneFileResolver,
    upsertOneFile: actionResolvers.UpsertOneFileResolver,
  },
  Tag: {
    aggregateTag: actionResolvers.AggregateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    createOneTag: actionResolvers.CreateOneTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    deleteOneTag: actionResolvers.DeleteOneTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    findFirstTagOrThrow: actionResolvers.FindFirstTagOrThrowResolver,
    tags: actionResolvers.FindManyTagResolver,
    tag: actionResolvers.FindUniqueTagResolver,
    getTag: actionResolvers.FindUniqueTagOrThrowResolver,
    groupByTag: actionResolvers.GroupByTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    updateOneTag: actionResolvers.UpdateOneTagResolver,
    upsertOneTag: actionResolvers.UpsertOneTagResolver,
  },
  Category: {
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    createOneCategory: actionResolvers.CreateOneCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    category: actionResolvers.FindUniqueCategoryResolver,
    getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
    upsertOneCategory: actionResolvers.UpsertOneCategoryResolver,
  },
  CategoriesOnPosts: {
    aggregateCategoriesOnPosts: actionResolvers.AggregateCategoriesOnPostsResolver,
    createManyCategoriesOnPosts: actionResolvers.CreateManyCategoriesOnPostsResolver,
    createOneCategoriesOnPosts: actionResolvers.CreateOneCategoriesOnPostsResolver,
    deleteManyCategoriesOnPosts: actionResolvers.DeleteManyCategoriesOnPostsResolver,
    deleteOneCategoriesOnPosts: actionResolvers.DeleteOneCategoriesOnPostsResolver,
    findFirstCategoriesOnPosts: actionResolvers.FindFirstCategoriesOnPostsResolver,
    findFirstCategoriesOnPostsOrThrow: actionResolvers.FindFirstCategoriesOnPostsOrThrowResolver,
    findManyCategoriesOnPosts: actionResolvers.FindManyCategoriesOnPostsResolver,
    findUniqueCategoriesOnPosts: actionResolvers.FindUniqueCategoriesOnPostsResolver,
    findUniqueCategoriesOnPostsOrThrow: actionResolvers.FindUniqueCategoriesOnPostsOrThrowResolver,
    groupByCategoriesOnPosts: actionResolvers.GroupByCategoriesOnPostsResolver,
    updateManyCategoriesOnPosts: actionResolvers.UpdateManyCategoriesOnPostsResolver,
    updateOneCategoriesOnPosts: actionResolvers.UpdateOneCategoriesOnPostsResolver,
    upsertOneCategoriesOnPosts: actionResolvers.UpsertOneCategoriesOnPostsResolver,
  },
  TagsOnPosts: {
    aggregateTagsOnPosts: actionResolvers.AggregateTagsOnPostsResolver,
    createManyTagsOnPosts: actionResolvers.CreateManyTagsOnPostsResolver,
    createOneTagsOnPosts: actionResolvers.CreateOneTagsOnPostsResolver,
    deleteManyTagsOnPosts: actionResolvers.DeleteManyTagsOnPostsResolver,
    deleteOneTagsOnPosts: actionResolvers.DeleteOneTagsOnPostsResolver,
    findFirstTagsOnPosts: actionResolvers.FindFirstTagsOnPostsResolver,
    findFirstTagsOnPostsOrThrow: actionResolvers.FindFirstTagsOnPostsOrThrowResolver,
    findManyTagsOnPosts: actionResolvers.FindManyTagsOnPostsResolver,
    findUniqueTagsOnPosts: actionResolvers.FindUniqueTagsOnPostsResolver,
    findUniqueTagsOnPostsOrThrow: actionResolvers.FindUniqueTagsOnPostsOrThrowResolver,
    groupByTagsOnPosts: actionResolvers.GroupByTagsOnPostsResolver,
    updateManyTagsOnPosts: actionResolvers.UpdateManyTagsOnPostsResolver,
    updateOneTagsOnPosts: actionResolvers.UpdateOneTagsOnPostsResolver,
    upsertOneTagsOnPosts: actionResolvers.UpsertOneTagsOnPostsResolver,
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver,
  },
}
const crudResolversInfo = {
  Post: [
    'aggregatePost',
    'createManyPost',
    'createOnePost',
    'deleteManyPost',
    'deleteOnePost',
    'findFirstPost',
    'findFirstPostOrThrow',
    'posts',
    'post',
    'getPost',
    'groupByPost',
    'updateManyPost',
    'updateOnePost',
    'upsertOnePost',
  ],
  File: [
    'aggregateFile',
    'createManyFile',
    'createOneFile',
    'deleteManyFile',
    'deleteOneFile',
    'findFirstFile',
    'findFirstFileOrThrow',
    'files',
    'file',
    'getFile',
    'groupByFile',
    'updateManyFile',
    'updateOneFile',
    'upsertOneFile',
  ],
  Tag: [
    'aggregateTag',
    'createManyTag',
    'createOneTag',
    'deleteManyTag',
    'deleteOneTag',
    'findFirstTag',
    'findFirstTagOrThrow',
    'tags',
    'tag',
    'getTag',
    'groupByTag',
    'updateManyTag',
    'updateOneTag',
    'upsertOneTag',
  ],
  Category: [
    'aggregateCategory',
    'createManyCategory',
    'createOneCategory',
    'deleteManyCategory',
    'deleteOneCategory',
    'findFirstCategory',
    'findFirstCategoryOrThrow',
    'categories',
    'category',
    'getCategory',
    'groupByCategory',
    'updateManyCategory',
    'updateOneCategory',
    'upsertOneCategory',
  ],
  CategoriesOnPosts: [
    'aggregateCategoriesOnPosts',
    'createManyCategoriesOnPosts',
    'createOneCategoriesOnPosts',
    'deleteManyCategoriesOnPosts',
    'deleteOneCategoriesOnPosts',
    'findFirstCategoriesOnPosts',
    'findFirstCategoriesOnPostsOrThrow',
    'findManyCategoriesOnPosts',
    'findUniqueCategoriesOnPosts',
    'findUniqueCategoriesOnPostsOrThrow',
    'groupByCategoriesOnPosts',
    'updateManyCategoriesOnPosts',
    'updateOneCategoriesOnPosts',
    'upsertOneCategoriesOnPosts',
  ],
  TagsOnPosts: [
    'aggregateTagsOnPosts',
    'createManyTagsOnPosts',
    'createOneTagsOnPosts',
    'deleteManyTagsOnPosts',
    'deleteOneTagsOnPosts',
    'findFirstTagsOnPosts',
    'findFirstTagsOnPostsOrThrow',
    'findManyTagsOnPosts',
    'findUniqueTagsOnPosts',
    'findUniqueTagsOnPostsOrThrow',
    'groupByTagsOnPosts',
    'updateManyTagsOnPosts',
    'updateOneTagsOnPosts',
    'upsertOneTagsOnPosts',
  ],
  User: [
    'aggregateUser',
    'createManyUser',
    'createOneUser',
    'deleteManyUser',
    'deleteOneUser',
    'findFirstUser',
    'findFirstUserOrThrow',
    'users',
    'user',
    'getUser',
    'groupByUser',
    'updateManyUser',
    'updateOneUser',
    'upsertOneUser',
  ],
}
const argsInfo = {
  AggregatePostArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyPostArgs: ['data', 'skipDuplicates'],
  CreateOnePostArgs: ['data'],
  DeleteManyPostArgs: ['where'],
  DeleteOnePostArgs: ['where'],
  FindFirstPostArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstPostOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyPostArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniquePostArgs: ['where'],
  FindUniquePostOrThrowArgs: ['where'],
  GroupByPostArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyPostArgs: ['data', 'where'],
  UpdateOnePostArgs: ['data', 'where'],
  UpsertOnePostArgs: ['where', 'create', 'update'],
  AggregateFileArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyFileArgs: ['data', 'skipDuplicates'],
  CreateOneFileArgs: ['data'],
  DeleteManyFileArgs: ['where'],
  DeleteOneFileArgs: ['where'],
  FindFirstFileArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstFileOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyFileArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueFileArgs: ['where'],
  FindUniqueFileOrThrowArgs: ['where'],
  GroupByFileArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyFileArgs: ['data', 'where'],
  UpdateOneFileArgs: ['data', 'where'],
  UpsertOneFileArgs: ['where', 'create', 'update'],
  AggregateTagArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyTagArgs: ['data', 'skipDuplicates'],
  CreateOneTagArgs: ['data'],
  DeleteManyTagArgs: ['where'],
  DeleteOneTagArgs: ['where'],
  FindFirstTagArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstTagOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyTagArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueTagArgs: ['where'],
  FindUniqueTagOrThrowArgs: ['where'],
  GroupByTagArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyTagArgs: ['data', 'where'],
  UpdateOneTagArgs: ['data', 'where'],
  UpsertOneTagArgs: ['where', 'create', 'update'],
  AggregateCategoryArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyCategoryArgs: ['data', 'skipDuplicates'],
  CreateOneCategoryArgs: ['data'],
  DeleteManyCategoryArgs: ['where'],
  DeleteOneCategoryArgs: ['where'],
  FindFirstCategoryArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstCategoryOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyCategoryArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueCategoryArgs: ['where'],
  FindUniqueCategoryOrThrowArgs: ['where'],
  GroupByCategoryArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyCategoryArgs: ['data', 'where'],
  UpdateOneCategoryArgs: ['data', 'where'],
  UpsertOneCategoryArgs: ['where', 'create', 'update'],
  AggregateCategoriesOnPostsArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyCategoriesOnPostsArgs: ['data', 'skipDuplicates'],
  CreateOneCategoriesOnPostsArgs: ['data'],
  DeleteManyCategoriesOnPostsArgs: ['where'],
  DeleteOneCategoriesOnPostsArgs: ['where'],
  FindFirstCategoriesOnPostsArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstCategoriesOnPostsOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyCategoriesOnPostsArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueCategoriesOnPostsArgs: ['where'],
  FindUniqueCategoriesOnPostsOrThrowArgs: ['where'],
  GroupByCategoriesOnPostsArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyCategoriesOnPostsArgs: ['data', 'where'],
  UpdateOneCategoriesOnPostsArgs: ['data', 'where'],
  UpsertOneCategoriesOnPostsArgs: ['where', 'create', 'update'],
  AggregateTagsOnPostsArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyTagsOnPostsArgs: ['data', 'skipDuplicates'],
  CreateOneTagsOnPostsArgs: ['data'],
  DeleteManyTagsOnPostsArgs: ['where'],
  DeleteOneTagsOnPostsArgs: ['where'],
  FindFirstTagsOnPostsArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstTagsOnPostsOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyTagsOnPostsArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueTagsOnPostsArgs: ['where'],
  FindUniqueTagsOnPostsOrThrowArgs: ['where'],
  GroupByTagsOnPostsArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyTagsOnPostsArgs: ['data', 'where'],
  UpdateOneTagsOnPostsArgs: ['data', 'where'],
  UpsertOneTagsOnPostsArgs: ['where', 'create', 'update'],
  AggregateUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyUserArgs: ['data', 'skipDuplicates'],
  CreateOneUserArgs: ['data'],
  DeleteManyUserArgs: ['where'],
  DeleteOneUserArgs: ['where'],
  FindFirstUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstUserOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueUserArgs: ['where'],
  FindUniqueUserOrThrowArgs: ['where'],
  GroupByUserArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyUserArgs: ['data', 'where'],
  UpdateOneUserArgs: ['data', 'where'],
  UpsertOneUserArgs: ['where', 'create', 'update'],
}

type ResolverModelNames = keyof typeof crudResolversMap

type ModelResolverActionNames<TModel extends ResolverModelNames> = keyof (typeof crudResolversMap)[TModel]['prototype']

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>
> & {
  _all?: MethodDecorator[]
  _query?: MethodDecorator[]
  _mutation?: MethodDecorator[]
}

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>
}

export function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap) {
  const mutationOperationPrefixes = ['createOne', 'createMany', 'deleteOne', 'updateOne', 'deleteMany', 'updateMany', 'upsertOne']
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap
    const crudTarget = crudResolversMap[modelName].prototype
    const resolverActionsConfig = resolversEnhanceMap[modelName]!
    const actionResolversConfig = actionResolversMap[modelName]
    const allActionsDecorators = resolverActionsConfig._all
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo]
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName as keyof typeof resolverActionsConfig] as
        | MethodDecorator[]
        | MethodDecoratorOverrideFn
        | undefined
      const isWriteOperation = mutationOperationPrefixes.some((prefix) => resolverActionName.startsWith(prefix))
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query
      const mainDecorators = [...(allActionsDecorators ?? []), ...(operationKindDecorators ?? [])]
      let decorators: MethodDecorator[]
      if (typeof maybeDecoratorsOrFn === 'function') {
        decorators = maybeDecoratorsOrFn(mainDecorators)
      } else {
        decorators = [...mainDecorators, ...(maybeDecoratorsOrFn ?? [])]
      }
      const actionTarget = (actionResolversConfig[resolverActionName as keyof typeof actionResolversConfig] as Function).prototype
      tslib.__decorate(decorators, crudTarget, resolverActionName, null)
      tslib.__decorate(decorators, actionTarget, resolverActionName, null)
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<keyof (typeof argsTypes)[TArgsType]['prototype'], number | symbol>

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<ArgFieldNames<TArgsType>>

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[]
  fields?: ArgFieldsConfig<TArgsType>
}

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>
}

export function applyArgsTypesEnhanceMap(argsTypesEnhanceMap: ArgsTypesEnhanceMap) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!
    const typeClass = argsTypes[argsTypeName]
    const typeTarget = typeClass.prototype
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName as keyof typeof argsInfo])
  }
}

const relationResolversMap = {
  Post: relationResolvers.PostRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  CategoriesOnPosts: relationResolvers.CategoriesOnPostsRelationsResolver,
  TagsOnPosts: relationResolvers.TagsOnPostsRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
}
const relationResolversInfo = {
  Post: ['author', 'CategoriesOnPosts', 'TagsOnPosts'],
  Tag: ['TagsOnPosts'],
  Category: ['CategoriesOnPosts'],
  CategoriesOnPosts: ['post', 'category'],
  TagsOnPosts: ['post', 'tag'],
  User: ['posts'],
}

type RelationResolverModelNames = keyof typeof relationResolversMap

type RelationResolverActionNames<TModel extends RelationResolverModelNames> = keyof (typeof relationResolversMap)[TModel]['prototype']

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames> = Partial<
  Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>
> & { _all?: MethodDecorator[] }

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>
}

export function applyRelationResolversEnhanceMap(relationResolversEnhanceMap: RelationResolversEnhanceMap) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap
    const relationResolverTarget = relationResolversMap[modelName].prototype
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!
    const allActionsDecorators = relationResolverActionsConfig._all ?? []
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo]
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName as keyof typeof relationResolverActionsConfig] as
        | MethodDecorator[]
        | MethodDecoratorOverrideFn
        | undefined
      let decorators: MethodDecorator[]
      if (typeof maybeDecoratorsOrFn === 'function') {
        decorators = maybeDecoratorsOrFn(allActionsDecorators)
      } else {
        decorators = [...allActionsDecorators, ...(maybeDecoratorsOrFn ?? [])]
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null)
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[]
  fields?: FieldsConfig
}

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[]

type FieldsConfig<TTypeKeys extends string = string> = Partial<Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>> & {
  _all?: PropertyDecorator[]
}

function applyTypeClassEnhanceConfig<TEnhanceConfig extends TypeConfig, TType extends object>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[],
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass)
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? []
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined
      let decorators: PropertyDecorator[]
      if (typeof maybeDecoratorsOrFn === 'function') {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators)
      } else {
        decorators = [...allFieldsDecorators, ...(maybeDecoratorsOrFn ?? [])]
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0)
    }
  }
}

const modelsInfo = {
  Post: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  File: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  Tag: ['id', 'createdAt', 'updatedAt', 'name'],
  Category: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoriesOnPosts: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  TagsOnPosts: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  User: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'avatar', 'role'],
}

type ModelNames = keyof typeof models

type ModelFieldNames<TModel extends ModelNames> = Exclude<keyof (typeof models)[TModel]['prototype'], number | symbol>

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<ModelFieldNames<TModel>>

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[]
  fields?: ModelFieldsConfig<TModel>
}

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>
}

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap
    const modelConfig = modelsEnhanceMap[modelName]!
    const modelClass = models[modelName]
    const modelTarget = modelClass.prototype
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName as keyof typeof modelsInfo])
  }
}

const outputsInfo = {
  AggregatePost: ['_count', '_avg', '_sum', '_min', '_max'],
  PostGroupBy: [
    'id',
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'authorId',
    '_count',
    '_avg',
    '_sum',
    '_min',
    '_max',
  ],
  AggregateFile: ['_count', '_avg', '_sum', '_min', '_max'],
  FileGroupBy: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateTag: ['_count', '_avg', '_sum', '_min', '_max'],
  TagGroupBy: ['id', 'createdAt', 'updatedAt', 'name', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateCategory: ['_count', '_avg', '_sum', '_min', '_max'],
  CategoryGroupBy: ['id', 'createdAt', 'updatedAt', 'name', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateCategoriesOnPosts: ['_count', '_avg', '_sum', '_min', '_max'],
  CategoriesOnPostsGroupBy: ['postId', 'categoryId', 'createdAt', 'updatedAt', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateTagsOnPosts: ['_count', '_avg', '_sum', '_min', '_max'],
  TagsOnPostsGroupBy: ['postId', 'tagId', 'createdAt', 'updatedAt', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateUser: ['_count', '_avg', '_sum', '_min', '_max'],
  UserGroupBy: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role', '_count', '_avg', '_sum', '_min', '_max'],
  AffectedRowsOutput: ['count'],
  PostCount: ['CategoriesOnPosts', 'TagsOnPosts'],
  PostCountAggregate: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId', '_all'],
  PostAvgAggregate: ['id', 'favoNum', 'browNum', 'authorId'],
  PostSumAggregate: ['id', 'favoNum', 'browNum', 'authorId'],
  PostMinAggregate: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  PostMaxAggregate: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  FileCountAggregate: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size', '_all'],
  FileAvgAggregate: ['id', 'size'],
  FileSumAggregate: ['id', 'size'],
  FileMinAggregate: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileMaxAggregate: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  TagCount: ['TagsOnPosts'],
  TagCountAggregate: ['id', 'createdAt', 'updatedAt', 'name', '_all'],
  TagAvgAggregate: ['id'],
  TagSumAggregate: ['id'],
  TagMinAggregate: ['id', 'createdAt', 'updatedAt', 'name'],
  TagMaxAggregate: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoryCount: ['CategoriesOnPosts'],
  CategoryCountAggregate: ['id', 'createdAt', 'updatedAt', 'name', '_all'],
  CategoryAvgAggregate: ['id'],
  CategorySumAggregate: ['id'],
  CategoryMinAggregate: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoryMaxAggregate: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoriesOnPostsCountAggregate: ['postId', 'categoryId', 'createdAt', 'updatedAt', '_all'],
  CategoriesOnPostsAvgAggregate: ['postId', 'categoryId'],
  CategoriesOnPostsSumAggregate: ['postId', 'categoryId'],
  CategoriesOnPostsMinAggregate: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsMaxAggregate: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  TagsOnPostsCountAggregate: ['postId', 'tagId', 'createdAt', 'updatedAt', '_all'],
  TagsOnPostsAvgAggregate: ['postId', 'tagId'],
  TagsOnPostsSumAggregate: ['postId', 'tagId'],
  TagsOnPostsMinAggregate: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  TagsOnPostsMaxAggregate: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  UserCount: ['posts'],
  UserCountAggregate: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role', '_all'],
  UserAvgAggregate: ['id'],
  UserSumAggregate: ['id'],
  UserMinAggregate: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  UserMaxAggregate: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
}

type OutputTypesNames = keyof typeof outputTypes

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<keyof (typeof outputTypes)[TOutput]['prototype'], number | symbol>

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<OutputTypeFieldNames<TOutput>>

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[]
  fields?: OutputTypeFieldsConfig<TOutput>
}

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>
}

export function applyOutputTypesEnhanceMap(outputTypesEnhanceMap: OutputTypesEnhanceMap) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!
    const typeClass = outputTypes[outputTypeName]
    const typeTarget = typeClass.prototype
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName as keyof typeof outputsInfo])
  }
}

const inputsInfo = {
  PostWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'authorId',
    'author',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
  PostOrderByWithRelationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'authorId',
    'author',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
  PostWhereUniqueInput: [
    'id',
    'AND',
    'OR',
    'NOT',
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'authorId',
    'author',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
  PostOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'authorId',
    '_count',
    '_avg',
    '_max',
    '_min',
    '_sum',
  ],
  PostScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'authorId',
  ],
  FileWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileWhereUniqueInput: ['id', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileOrderByWithAggregationInput: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size', '_count', '_avg', '_max', '_min', '_sum'],
  FileScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  TagWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name', 'TagsOnPosts'],
  TagOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'name', 'TagsOnPosts'],
  TagWhereUniqueInput: ['id', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'name', 'TagsOnPosts'],
  TagOrderByWithAggregationInput: ['id', 'createdAt', 'updatedAt', 'name', '_count', '_avg', '_max', '_min', '_sum'],
  TagScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name'],
  CategoryWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name', 'CategoriesOnPosts'],
  CategoryOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'name', 'CategoriesOnPosts'],
  CategoryWhereUniqueInput: ['id', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'name', 'CategoriesOnPosts'],
  CategoryOrderByWithAggregationInput: ['id', 'createdAt', 'updatedAt', 'name', '_count', '_avg', '_max', '_min', '_sum'],
  CategoryScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name'],
  CategoriesOnPostsWhereInput: ['AND', 'OR', 'NOT', 'postId', 'categoryId', 'createdAt', 'updatedAt', 'post', 'category'],
  CategoriesOnPostsOrderByWithRelationInput: ['postId', 'categoryId', 'createdAt', 'updatedAt', 'post', 'category'],
  CategoriesOnPostsWhereUniqueInput: ['postId_categoryId', 'AND', 'OR', 'NOT', 'postId', 'categoryId', 'createdAt', 'updatedAt', 'post', 'category'],
  CategoriesOnPostsOrderByWithAggregationInput: ['postId', 'categoryId', 'createdAt', 'updatedAt', '_count', '_avg', '_max', '_min', '_sum'],
  CategoriesOnPostsScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'postId', 'categoryId', 'createdAt', 'updatedAt'],
  TagsOnPostsWhereInput: ['AND', 'OR', 'NOT', 'postId', 'tagId', 'createdAt', 'updatedAt', 'post', 'tag'],
  TagsOnPostsOrderByWithRelationInput: ['postId', 'tagId', 'createdAt', 'updatedAt', 'post', 'tag'],
  TagsOnPostsWhereUniqueInput: ['postId_tagId', 'AND', 'OR', 'NOT', 'postId', 'tagId', 'createdAt', 'updatedAt', 'post', 'tag'],
  TagsOnPostsOrderByWithAggregationInput: ['postId', 'tagId', 'createdAt', 'updatedAt', '_count', '_avg', '_max', '_min', '_sum'],
  TagsOnPostsScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'postId', 'tagId', 'createdAt', 'updatedAt'],
  UserWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role', 'posts'],
  UserOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role', 'posts'],
  UserWhereUniqueInput: ['id', 'email', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'nickName', 'password', 'avatar', 'role', 'posts'],
  UserOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'nickName',
    'email',
    'password',
    'avatar',
    'role',
    '_count',
    '_avg',
    '_max',
    '_min',
    '_sum',
  ],
  UserScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  PostCreateInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'author',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
  PostUpdateInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'author',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
  PostCreateManyInput: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  PostUpdateManyMutationInput: ['createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum'],
  FileCreateInput: ['createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileUpdateInput: ['createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileCreateManyInput: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileUpdateManyMutationInput: ['createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  TagCreateInput: ['createdAt', 'updatedAt', 'name', 'TagsOnPosts'],
  TagUpdateInput: ['createdAt', 'updatedAt', 'name', 'TagsOnPosts'],
  TagCreateManyInput: ['id', 'createdAt', 'updatedAt', 'name'],
  TagUpdateManyMutationInput: ['createdAt', 'updatedAt', 'name'],
  CategoryCreateInput: ['createdAt', 'updatedAt', 'name', 'CategoriesOnPosts'],
  CategoryUpdateInput: ['createdAt', 'updatedAt', 'name', 'CategoriesOnPosts'],
  CategoryCreateManyInput: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoryUpdateManyMutationInput: ['createdAt', 'updatedAt', 'name'],
  CategoriesOnPostsCreateInput: ['createdAt', 'updatedAt', 'post', 'category'],
  CategoriesOnPostsUpdateInput: ['createdAt', 'updatedAt', 'post', 'category'],
  CategoriesOnPostsCreateManyInput: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsUpdateManyMutationInput: ['createdAt', 'updatedAt'],
  TagsOnPostsCreateInput: ['createdAt', 'updatedAt', 'post', 'tag'],
  TagsOnPostsUpdateInput: ['createdAt', 'updatedAt', 'post', 'tag'],
  TagsOnPostsCreateManyInput: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  TagsOnPostsUpdateManyMutationInput: ['createdAt', 'updatedAt'],
  UserCreateInput: ['createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role', 'posts'],
  UserUpdateInput: ['createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role', 'posts'],
  UserCreateManyInput: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  UserUpdateManyMutationInput: ['createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  IntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  DateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  StringFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not'],
  StringNullableFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not'],
  BoolFilter: ['equals', 'not'],
  UserRelationFilter: ['is', 'isNot'],
  CategoriesOnPostsListRelationFilter: ['every', 'some', 'none'],
  TagsOnPostsListRelationFilter: ['every', 'some', 'none'],
  SortOrderInput: ['sort', 'nulls'],
  CategoriesOnPostsOrderByRelationAggregateInput: ['_count'],
  TagsOnPostsOrderByRelationAggregateInput: ['_count'],
  PostCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  PostAvgOrderByAggregateInput: ['id', 'favoNum', 'browNum', 'authorId'],
  PostMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  PostMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  PostSumOrderByAggregateInput: ['id', 'favoNum', 'browNum', 'authorId'],
  IntWithAggregatesFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not', '_count', '_avg', '_sum', '_min', '_max'],
  DateTimeWithAggregatesFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not', '_count', '_min', '_max'],
  StringWithAggregatesFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not', '_count', '_min', '_max'],
  StringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  BoolWithAggregatesFilter: ['equals', 'not', '_count', '_min', '_max'],
  FileCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileAvgOrderByAggregateInput: ['id', 'size'],
  FileMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name', 'path', 'extension', 'size'],
  FileSumOrderByAggregateInput: ['id', 'size'],
  TagCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name'],
  TagAvgOrderByAggregateInput: ['id'],
  TagMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name'],
  TagMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name'],
  TagSumOrderByAggregateInput: ['id'],
  CategoryCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoryAvgOrderByAggregateInput: ['id'],
  CategoryMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name'],
  CategoryMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name'],
  CategorySumOrderByAggregateInput: ['id'],
  PostRelationFilter: ['is', 'isNot'],
  CategoryRelationFilter: ['is', 'isNot'],
  CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput: ['postId', 'categoryId'],
  CategoriesOnPostsCountOrderByAggregateInput: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsAvgOrderByAggregateInput: ['postId', 'categoryId'],
  CategoriesOnPostsMaxOrderByAggregateInput: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsMinOrderByAggregateInput: ['postId', 'categoryId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsSumOrderByAggregateInput: ['postId', 'categoryId'],
  TagRelationFilter: ['is', 'isNot'],
  TagsOnPostsPostIdTagIdCompoundUniqueInput: ['postId', 'tagId'],
  TagsOnPostsCountOrderByAggregateInput: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  TagsOnPostsAvgOrderByAggregateInput: ['postId', 'tagId'],
  TagsOnPostsMaxOrderByAggregateInput: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  TagsOnPostsMinOrderByAggregateInput: ['postId', 'tagId', 'createdAt', 'updatedAt'],
  TagsOnPostsSumOrderByAggregateInput: ['postId', 'tagId'],
  EnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  PostListRelationFilter: ['every', 'some', 'none'],
  PostOrderByRelationAggregateInput: ['_count'],
  UserCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  UserAvgOrderByAggregateInput: ['id'],
  UserMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  UserMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  UserSumOrderByAggregateInput: ['id'],
  EnumRoleWithAggregatesFilter: ['equals', 'in', 'notIn', 'not', '_count', '_min', '_max'],
  UserCreateNestedOneWithoutPostsInput: ['create', 'connectOrCreate', 'connect'],
  CategoriesOnPostsCreateNestedManyWithoutPostInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
  TagsOnPostsCreateNestedManyWithoutPostInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
  DateTimeFieldUpdateOperationsInput: ['set'],
  StringFieldUpdateOperationsInput: ['set'],
  NullableStringFieldUpdateOperationsInput: ['set'],
  BoolFieldUpdateOperationsInput: ['set'],
  IntFieldUpdateOperationsInput: ['set', 'increment', 'decrement', 'multiply', 'divide'],
  UserUpdateOneRequiredWithoutPostsNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  CategoriesOnPostsUpdateManyWithoutPostNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  TagsOnPostsUpdateManyWithoutPostNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  TagsOnPostsCreateNestedManyWithoutTagInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
  TagsOnPostsUpdateManyWithoutTagNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  CategoriesOnPostsCreateNestedManyWithoutCategoryInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
  CategoriesOnPostsUpdateManyWithoutCategoryNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  PostCreateNestedOneWithoutCategoriesOnPostsInput: ['create', 'connectOrCreate', 'connect'],
  CategoryCreateNestedOneWithoutCategoriesOnPostsInput: ['create', 'connectOrCreate', 'connect'],
  PostUpdateOneRequiredWithoutCategoriesOnPostsNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  CategoryUpdateOneRequiredWithoutCategoriesOnPostsNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  PostCreateNestedOneWithoutTagsOnPostsInput: ['create', 'connectOrCreate', 'connect'],
  TagCreateNestedOneWithoutTagsOnPostsInput: ['create', 'connectOrCreate', 'connect'],
  PostUpdateOneRequiredWithoutTagsOnPostsNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  TagUpdateOneRequiredWithoutTagsOnPostsNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  PostCreateNestedManyWithoutAuthorInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
  EnumRoleFieldUpdateOperationsInput: ['set'],
  PostUpdateManyWithoutAuthorNestedInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  NestedIntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedDateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedStringFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not'],
  NestedStringNullableFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not'],
  NestedBoolFilter: ['equals', 'not'],
  NestedIntWithAggregatesFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not', '_count', '_avg', '_sum', '_min', '_max'],
  NestedFloatFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedDateTimeWithAggregatesFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not', '_count', '_min', '_max'],
  NestedStringWithAggregatesFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not', '_count', '_min', '_max'],
  NestedStringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntNullableFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedBoolWithAggregatesFilter: ['equals', 'not', '_count', '_min', '_max'],
  NestedEnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  NestedEnumRoleWithAggregatesFilter: ['equals', 'in', 'notIn', 'not', '_count', '_min', '_max'],
  UserCreateWithoutPostsInput: ['createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  UserCreateOrConnectWithoutPostsInput: ['where', 'create'],
  CategoriesOnPostsCreateWithoutPostInput: ['createdAt', 'updatedAt', 'category'],
  CategoriesOnPostsCreateOrConnectWithoutPostInput: ['where', 'create'],
  CategoriesOnPostsCreateManyPostInputEnvelope: ['data', 'skipDuplicates'],
  TagsOnPostsCreateWithoutPostInput: ['createdAt', 'updatedAt', 'tag'],
  TagsOnPostsCreateOrConnectWithoutPostInput: ['where', 'create'],
  TagsOnPostsCreateManyPostInputEnvelope: ['data', 'skipDuplicates'],
  UserUpsertWithoutPostsInput: ['update', 'create', 'where'],
  UserUpdateToOneWithWhereWithoutPostsInput: ['where', 'data'],
  UserUpdateWithoutPostsInput: ['createdAt', 'updatedAt', 'nickName', 'email', 'password', 'avatar', 'role'],
  CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput: ['where', 'update', 'create'],
  CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput: ['where', 'data'],
  CategoriesOnPostsUpdateManyWithWhereWithoutPostInput: ['where', 'data'],
  CategoriesOnPostsScalarWhereInput: ['AND', 'OR', 'NOT', 'postId', 'categoryId', 'createdAt', 'updatedAt'],
  TagsOnPostsUpsertWithWhereUniqueWithoutPostInput: ['where', 'update', 'create'],
  TagsOnPostsUpdateWithWhereUniqueWithoutPostInput: ['where', 'data'],
  TagsOnPostsUpdateManyWithWhereWithoutPostInput: ['where', 'data'],
  TagsOnPostsScalarWhereInput: ['AND', 'OR', 'NOT', 'postId', 'tagId', 'createdAt', 'updatedAt'],
  TagsOnPostsCreateWithoutTagInput: ['createdAt', 'updatedAt', 'post'],
  TagsOnPostsCreateOrConnectWithoutTagInput: ['where', 'create'],
  TagsOnPostsCreateManyTagInputEnvelope: ['data', 'skipDuplicates'],
  TagsOnPostsUpsertWithWhereUniqueWithoutTagInput: ['where', 'update', 'create'],
  TagsOnPostsUpdateWithWhereUniqueWithoutTagInput: ['where', 'data'],
  TagsOnPostsUpdateManyWithWhereWithoutTagInput: ['where', 'data'],
  CategoriesOnPostsCreateWithoutCategoryInput: ['createdAt', 'updatedAt', 'post'],
  CategoriesOnPostsCreateOrConnectWithoutCategoryInput: ['where', 'create'],
  CategoriesOnPostsCreateManyCategoryInputEnvelope: ['data', 'skipDuplicates'],
  CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput: ['where', 'update', 'create'],
  CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput: ['where', 'data'],
  CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput: ['where', 'data'],
  PostCreateWithoutCategoriesOnPostsInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'author',
    'TagsOnPosts',
  ],
  PostCreateOrConnectWithoutCategoriesOnPostsInput: ['where', 'create'],
  CategoryCreateWithoutCategoriesOnPostsInput: ['createdAt', 'updatedAt', 'name'],
  CategoryCreateOrConnectWithoutCategoriesOnPostsInput: ['where', 'create'],
  PostUpsertWithoutCategoriesOnPostsInput: ['update', 'create', 'where'],
  PostUpdateToOneWithWhereWithoutCategoriesOnPostsInput: ['where', 'data'],
  PostUpdateWithoutCategoriesOnPostsInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'author',
    'TagsOnPosts',
  ],
  CategoryUpsertWithoutCategoriesOnPostsInput: ['update', 'create', 'where'],
  CategoryUpdateToOneWithWhereWithoutCategoriesOnPostsInput: ['where', 'data'],
  CategoryUpdateWithoutCategoriesOnPostsInput: ['createdAt', 'updatedAt', 'name'],
  PostCreateWithoutTagsOnPostsInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'author',
    'CategoriesOnPosts',
  ],
  PostCreateOrConnectWithoutTagsOnPostsInput: ['where', 'create'],
  TagCreateWithoutTagsOnPostsInput: ['createdAt', 'updatedAt', 'name'],
  TagCreateOrConnectWithoutTagsOnPostsInput: ['where', 'create'],
  PostUpsertWithoutTagsOnPostsInput: ['update', 'create', 'where'],
  PostUpdateToOneWithWhereWithoutTagsOnPostsInput: ['where', 'data'],
  PostUpdateWithoutTagsOnPostsInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'author',
    'CategoriesOnPosts',
  ],
  TagUpsertWithoutTagsOnPostsInput: ['update', 'create', 'where'],
  TagUpdateToOneWithWhereWithoutTagsOnPostsInput: ['where', 'data'],
  TagUpdateWithoutTagsOnPostsInput: ['createdAt', 'updatedAt', 'name'],
  PostCreateWithoutAuthorInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
  PostCreateOrConnectWithoutAuthorInput: ['where', 'create'],
  PostCreateManyAuthorInputEnvelope: ['data', 'skipDuplicates'],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ['where', 'update', 'create'],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ['where', 'data'],
  PostUpdateManyWithWhereWithoutAuthorInput: ['where', 'data'],
  PostScalarWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum', 'authorId'],
  CategoriesOnPostsCreateManyPostInput: ['categoryId', 'createdAt', 'updatedAt'],
  TagsOnPostsCreateManyPostInput: ['tagId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsUpdateWithoutPostInput: ['createdAt', 'updatedAt', 'category'],
  TagsOnPostsUpdateWithoutPostInput: ['createdAt', 'updatedAt', 'tag'],
  TagsOnPostsCreateManyTagInput: ['postId', 'createdAt', 'updatedAt'],
  TagsOnPostsUpdateWithoutTagInput: ['createdAt', 'updatedAt', 'post'],
  CategoriesOnPostsCreateManyCategoryInput: ['postId', 'createdAt', 'updatedAt'],
  CategoriesOnPostsUpdateWithoutCategoryInput: ['createdAt', 'updatedAt', 'post'],
  PostCreateManyAuthorInput: ['id', 'createdAt', 'updatedAt', 'title', 'description', 'content', 'published', 'favoNum', 'browNum'],
  PostUpdateWithoutAuthorInput: [
    'createdAt',
    'updatedAt',
    'title',
    'description',
    'content',
    'published',
    'favoNum',
    'browNum',
    'CategoriesOnPosts',
    'TagsOnPosts',
  ],
}

type InputTypesNames = keyof typeof inputTypes

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<keyof (typeof inputTypes)[TInput]['prototype'], number | symbol>

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<InputTypeFieldNames<TInput>>

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[]
  fields?: InputTypeFieldsConfig<TInput>
}

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>
}

export function applyInputTypesEnhanceMap(inputTypesEnhanceMap: InputTypesEnhanceMap) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!
    const typeClass = inputTypes[inputTypeName]
    const typeTarget = typeClass.prototype
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName as keyof typeof inputsInfo])
  }
}
