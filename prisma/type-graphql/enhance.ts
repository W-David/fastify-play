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
  Profile: crudResolvers.ProfileCrudResolver,
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
  Profile: {
    aggregateProfile: actionResolvers.AggregateProfileResolver,
    createManyProfile: actionResolvers.CreateManyProfileResolver,
    createOneProfile: actionResolvers.CreateOneProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    findFirstProfileOrThrow: actionResolvers.FindFirstProfileOrThrowResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    profile: actionResolvers.FindUniqueProfileResolver,
    getProfile: actionResolvers.FindUniqueProfileOrThrowResolver,
    groupByProfile: actionResolvers.GroupByProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    updateOneProfile: actionResolvers.UpdateOneProfileResolver,
    upsertOneProfile: actionResolvers.UpsertOneProfileResolver,
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
  Profile: [
    'aggregateProfile',
    'createManyProfile',
    'createOneProfile',
    'deleteManyProfile',
    'deleteOneProfile',
    'findFirstProfile',
    'findFirstProfileOrThrow',
    'profiles',
    'profile',
    'getProfile',
    'groupByProfile',
    'updateManyProfile',
    'updateOneProfile',
    'upsertOneProfile',
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
  AggregateProfileArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyProfileArgs: ['data', 'skipDuplicates'],
  CreateOneProfileArgs: ['data'],
  DeleteManyProfileArgs: ['where'],
  DeleteOneProfileArgs: ['where'],
  FindFirstProfileArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindFirstProfileOrThrowArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyProfileArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueProfileArgs: ['where'],
  FindUniqueProfileOrThrowArgs: ['where'],
  GroupByProfileArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyProfileArgs: ['data', 'where'],
  UpdateOneProfileArgs: ['data', 'where'],
  UpsertOneProfileArgs: ['where', 'create', 'update'],
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
  Profile: relationResolvers.ProfileRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
}
const relationResolversInfo = {
  Post: ['author'],
  Profile: ['user'],
  User: ['posts', 'profile'],
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
  Post: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  Profile: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  User: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'role'],
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
  PostGroupBy: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateProfile: ['_count', '_avg', '_sum', '_min', '_max'],
  ProfileGroupBy: ['id', 'createdAt', 'updatedAt', 'bio', 'userId', '_count', '_avg', '_sum', '_min', '_max'],
  AggregateUser: ['_count', '_avg', '_sum', '_min', '_max'],
  UserGroupBy: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role', '_count', '_avg', '_sum', '_min', '_max'],
  AffectedRowsOutput: ['count'],
  PostCountAggregate: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId', '_all'],
  PostAvgAggregate: ['id', 'authorId'],
  PostSumAggregate: ['id', 'authorId'],
  PostMinAggregate: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  PostMaxAggregate: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  ProfileCountAggregate: ['id', 'createdAt', 'updatedAt', 'bio', 'userId', '_all'],
  ProfileAvgAggregate: ['id', 'userId'],
  ProfileSumAggregate: ['id', 'userId'],
  ProfileMinAggregate: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  ProfileMaxAggregate: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  UserCount: ['posts', 'profile'],
  UserCountAggregate: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role', '_all'],
  UserAvgAggregate: ['id'],
  UserSumAggregate: ['id'],
  UserMinAggregate: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  UserMaxAggregate: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
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
  PostWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId', 'author'],
  PostOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId', 'author'],
  PostWhereUniqueInput: ['id', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId', 'author'],
  PostOrderByWithAggregationInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId', '_count', '_avg', '_max', '_min', '_sum'],
  PostScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  ProfileWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'bio', 'userId', 'user'],
  ProfileOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'bio', 'userId', 'user'],
  ProfileWhereUniqueInput: ['id', 'userId', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'bio', 'user'],
  ProfileOrderByWithAggregationInput: ['id', 'createdAt', 'updatedAt', 'bio', 'userId', '_count', '_avg', '_max', '_min', '_sum'],
  ProfileScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  UserWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'posts', 'profile'],
  UserOrderByWithRelationInput: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'posts', 'profile'],
  UserWhereUniqueInput: ['id', 'email', 'AND', 'OR', 'NOT', 'createdAt', 'updatedAt', 'name', 'password', 'role', 'posts', 'profile'],
  UserOrderByWithAggregationInput: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role', '_count', '_avg', '_max', '_min', '_sum'],
  UserScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  PostCreateInput: ['createdAt', 'updatedAt', 'title', 'content', 'published', 'author'],
  PostUpdateInput: ['createdAt', 'updatedAt', 'title', 'content', 'published', 'author'],
  PostCreateManyInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  PostUpdateManyMutationInput: ['createdAt', 'updatedAt', 'title', 'content', 'published'],
  ProfileCreateInput: ['createdAt', 'updatedAt', 'bio', 'user'],
  ProfileUpdateInput: ['createdAt', 'updatedAt', 'bio', 'user'],
  ProfileCreateManyInput: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  ProfileUpdateManyMutationInput: ['createdAt', 'updatedAt', 'bio'],
  UserCreateInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'posts', 'profile'],
  UserUpdateInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'posts', 'profile'],
  UserCreateManyInput: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  UserUpdateManyMutationInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  IntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  DateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  StringFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not'],
  StringNullableFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'not'],
  BoolFilter: ['equals', 'not'],
  UserRelationFilter: ['is', 'isNot'],
  SortOrderInput: ['sort', 'nulls'],
  PostCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  PostAvgOrderByAggregateInput: ['id', 'authorId'],
  PostMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  PostMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  PostSumOrderByAggregateInput: ['id', 'authorId'],
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
  ProfileCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  ProfileAvgOrderByAggregateInput: ['id', 'userId'],
  ProfileMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  ProfileMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  ProfileSumOrderByAggregateInput: ['id', 'userId'],
  EnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  PostListRelationFilter: ['every', 'some', 'none'],
  ProfileListRelationFilter: ['every', 'some', 'none'],
  PostOrderByRelationAggregateInput: ['_count'],
  ProfileOrderByRelationAggregateInput: ['_count'],
  UserCountOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  UserAvgOrderByAggregateInput: ['id'],
  UserMaxOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  UserMinOrderByAggregateInput: ['id', 'createdAt', 'updatedAt', 'name', 'email', 'password', 'role'],
  UserSumOrderByAggregateInput: ['id'],
  EnumRoleWithAggregatesFilter: ['equals', 'in', 'notIn', 'not', '_count', '_min', '_max'],
  UserCreateNestedOneWithoutPostsInput: ['create', 'connectOrCreate', 'connect'],
  DateTimeFieldUpdateOperationsInput: ['set'],
  StringFieldUpdateOperationsInput: ['set'],
  NullableStringFieldUpdateOperationsInput: ['set'],
  BoolFieldUpdateOperationsInput: ['set'],
  UserUpdateOneRequiredWithoutPostsNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  IntFieldUpdateOperationsInput: ['set', 'increment', 'decrement', 'multiply', 'divide'],
  UserCreateNestedOneWithoutProfileInput: ['create', 'connectOrCreate', 'connect'],
  UserUpdateOneRequiredWithoutProfileNestedInput: ['create', 'connectOrCreate', 'upsert', 'connect', 'update'],
  PostCreateNestedManyWithoutAuthorInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
  ProfileCreateNestedManyWithoutUserInput: ['create', 'connectOrCreate', 'createMany', 'connect'],
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
  ProfileUpdateManyWithoutUserNestedInput: [
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
  UserCreateWithoutPostsInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'profile'],
  UserCreateOrConnectWithoutPostsInput: ['where', 'create'],
  UserUpsertWithoutPostsInput: ['update', 'create', 'where'],
  UserUpdateToOneWithWhereWithoutPostsInput: ['where', 'data'],
  UserUpdateWithoutPostsInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'profile'],
  UserCreateWithoutProfileInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'posts'],
  UserCreateOrConnectWithoutProfileInput: ['where', 'create'],
  UserUpsertWithoutProfileInput: ['update', 'create', 'where'],
  UserUpdateToOneWithWhereWithoutProfileInput: ['where', 'data'],
  UserUpdateWithoutProfileInput: ['createdAt', 'updatedAt', 'name', 'email', 'password', 'role', 'posts'],
  PostCreateWithoutAuthorInput: ['createdAt', 'updatedAt', 'title', 'content', 'published'],
  PostCreateOrConnectWithoutAuthorInput: ['where', 'create'],
  PostCreateManyAuthorInputEnvelope: ['data', 'skipDuplicates'],
  ProfileCreateWithoutUserInput: ['createdAt', 'updatedAt', 'bio'],
  ProfileCreateOrConnectWithoutUserInput: ['where', 'create'],
  ProfileCreateManyUserInputEnvelope: ['data', 'skipDuplicates'],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ['where', 'update', 'create'],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ['where', 'data'],
  PostUpdateManyWithWhereWithoutAuthorInput: ['where', 'data'],
  PostScalarWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'title', 'content', 'published', 'authorId'],
  ProfileUpsertWithWhereUniqueWithoutUserInput: ['where', 'update', 'create'],
  ProfileUpdateWithWhereUniqueWithoutUserInput: ['where', 'data'],
  ProfileUpdateManyWithWhereWithoutUserInput: ['where', 'data'],
  ProfileScalarWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'updatedAt', 'bio', 'userId'],
  PostCreateManyAuthorInput: ['id', 'createdAt', 'updatedAt', 'title', 'content', 'published'],
  ProfileCreateManyUserInput: ['id', 'createdAt', 'updatedAt', 'bio'],
  PostUpdateWithoutAuthorInput: ['createdAt', 'updatedAt', 'title', 'content', 'published'],
  ProfileUpdateWithoutUserInput: ['createdAt', 'updatedAt', 'bio'],
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
