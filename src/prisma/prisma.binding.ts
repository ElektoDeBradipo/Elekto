import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    rooms: <T = Room[]>(args: { where?: RoomWhereInput, orderBy?: RoomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    movieRelations: <T = MovieRelation[]>(args: { where?: MovieRelationWhereInput, orderBy?: MovieRelationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    movies: <T = Movie[]>(args: { where?: MovieWhereInput, orderBy?: MovieOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    room: <T = Room | null>(args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    movie: <T = Movie | null>(args: { where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roomsConnection: <T = RoomConnection>(args: { where?: RoomWhereInput, orderBy?: RoomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    movieRelationsConnection: <T = MovieRelationConnection>(args: { where?: MovieRelationWhereInput, orderBy?: MovieRelationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    moviesConnection: <T = MovieConnection>(args: { where?: MovieWhereInput, orderBy?: MovieOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createRoom: <T = Room>(args: { data: RoomCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMovieRelation: <T = MovieRelation>(args: { data: MovieRelationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMovie: <T = Movie>(args: { data: MovieCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRoom: <T = Room | null>(args: { data: RoomUpdateInput, where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMovie: <T = Movie | null>(args: { data: MovieUpdateInput, where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRoom: <T = Room | null>(args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMovie: <T = Movie | null>(args: { where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRoom: <T = Room>(args: { where: RoomWhereUniqueInput, create: RoomCreateInput, update: RoomUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMovie: <T = Movie>(args: { where: MovieWhereUniqueInput, create: MovieCreateInput, update: MovieUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRooms: <T = BatchPayload>(args: { data: RoomUpdateInput, where?: RoomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMovieRelations: <T = BatchPayload>(args: { data: MovieRelationUpdateInput, where?: MovieRelationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMovies: <T = BatchPayload>(args: { data: MovieUpdateInput, where?: MovieWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRooms: <T = BatchPayload>(args: { where?: RoomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMovieRelations: <T = BatchPayload>(args: { where?: MovieRelationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMovies: <T = BatchPayload>(args: { where?: MovieWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    room: <T = RoomSubscriptionPayload | null>(args: { where?: RoomSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    movieRelation: <T = MovieRelationSubscriptionPayload | null>(args: { where?: MovieRelationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    movie: <T = MovieSubscriptionPayload | null>(args: { where?: MovieSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Room: (where?: RoomWhereInput) => Promise<boolean>
  MovieRelation: (where?: MovieRelationWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Movie: (where?: MovieWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateMovie {
  count: Int!
}

type AggregateMovieRelation {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Movie implements Node {
  id: ID!
  tmdbId: String
  imdbId: String
  traktId: String
  createdAt: DateTime!
}

"""A connection to a list of items."""
type MovieConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  tmdbId: String
  imdbId: String
  traktId: String
}

input MovieCreateOneInput {
  create: MovieCreateInput
  connect: MovieWhereUniqueInput
}

"""An edge in a connection."""
type MovieEdge {
  """The item at the end of the edge."""
  node: Movie!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  tmdbId_ASC
  tmdbId_DESC
  imdbId_ASC
  imdbId_DESC
  traktId_ASC
  traktId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MoviePreviousValues {
  id: ID!
  tmdbId: String
  imdbId: String
  traktId: String
  createdAt: DateTime!
}

type MovieRelation {
  watched: Boolean!
  watchlisted: Boolean!
  movie(where: MovieWhereInput): Movie!
}

"""A connection to a list of items."""
type MovieRelationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MovieRelationEdge]!
  aggregate: AggregateMovieRelation!
}

input MovieRelationCreateInput {
  watched: Boolean!
  watchlisted: Boolean!
  movie: MovieCreateOneInput!
}

input MovieRelationCreateManyInput {
  create: [MovieRelationCreateInput!]
}

"""An edge in a connection."""
type MovieRelationEdge {
  """The item at the end of the edge."""
  node: MovieRelation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MovieRelationOrderByInput {
  watched_ASC
  watched_DESC
  watchlisted_ASC
  watchlisted_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MovieRelationPreviousValues {
  watched: Boolean!
  watchlisted: Boolean!
}

type MovieRelationSubscriptionPayload {
  mutation: MutationType!
  node: MovieRelation
  updatedFields: [String!]
  previousValues: MovieRelationPreviousValues
}

input MovieRelationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MovieRelationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MovieRelationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MovieRelationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MovieRelationWhereInput
}

input MovieRelationUpdateInput {
  watched: Boolean
  watchlisted: Boolean
  movie: MovieUpdateOneRequiredInput
}

input MovieRelationUpdateManyInput {
  create: [MovieRelationCreateInput!]
}

input MovieRelationWhereInput {
  """Logical AND on all given filters."""
  AND: [MovieRelationWhereInput!]

  """Logical OR on all given filters."""
  OR: [MovieRelationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MovieRelationWhereInput!]
  watched: Boolean

  """All values that are not equal to given value."""
  watched_not: Boolean
  watchlisted: Boolean

  """All values that are not equal to given value."""
  watchlisted_not: Boolean
  movie: MovieWhereInput
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MovieSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MovieSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MovieSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
}

input MovieUpdateDataInput {
  tmdbId: String
  imdbId: String
  traktId: String
}

input MovieUpdateInput {
  tmdbId: String
  imdbId: String
  traktId: String
}

input MovieUpdateOneRequiredInput {
  create: MovieCreateInput
  connect: MovieWhereUniqueInput
  update: MovieUpdateDataInput
  upsert: MovieUpsertNestedInput
}

input MovieUpsertNestedInput {
  update: MovieUpdateDataInput!
  create: MovieCreateInput!
}

input MovieWhereInput {
  """Logical AND on all given filters."""
  AND: [MovieWhereInput!]

  """Logical OR on all given filters."""
  OR: [MovieWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MovieWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  tmdbId: String

  """All values that are not equal to given value."""
  tmdbId_not: String

  """All values that are contained in given list."""
  tmdbId_in: [String!]

  """All values that are not contained in given list."""
  tmdbId_not_in: [String!]

  """All values less than the given value."""
  tmdbId_lt: String

  """All values less than or equal the given value."""
  tmdbId_lte: String

  """All values greater than the given value."""
  tmdbId_gt: String

  """All values greater than or equal the given value."""
  tmdbId_gte: String

  """All values containing the given string."""
  tmdbId_contains: String

  """All values not containing the given string."""
  tmdbId_not_contains: String

  """All values starting with the given string."""
  tmdbId_starts_with: String

  """All values not starting with the given string."""
  tmdbId_not_starts_with: String

  """All values ending with the given string."""
  tmdbId_ends_with: String

  """All values not ending with the given string."""
  tmdbId_not_ends_with: String
  imdbId: String

  """All values that are not equal to given value."""
  imdbId_not: String

  """All values that are contained in given list."""
  imdbId_in: [String!]

  """All values that are not contained in given list."""
  imdbId_not_in: [String!]

  """All values less than the given value."""
  imdbId_lt: String

  """All values less than or equal the given value."""
  imdbId_lte: String

  """All values greater than the given value."""
  imdbId_gt: String

  """All values greater than or equal the given value."""
  imdbId_gte: String

  """All values containing the given string."""
  imdbId_contains: String

  """All values not containing the given string."""
  imdbId_not_contains: String

  """All values starting with the given string."""
  imdbId_starts_with: String

  """All values not starting with the given string."""
  imdbId_not_starts_with: String

  """All values ending with the given string."""
  imdbId_ends_with: String

  """All values not ending with the given string."""
  imdbId_not_ends_with: String
  traktId: String

  """All values that are not equal to given value."""
  traktId_not: String

  """All values that are contained in given list."""
  traktId_in: [String!]

  """All values that are not contained in given list."""
  traktId_not_in: [String!]

  """All values less than the given value."""
  traktId_lt: String

  """All values less than or equal the given value."""
  traktId_lte: String

  """All values greater than the given value."""
  traktId_gt: String

  """All values greater than or equal the given value."""
  traktId_gte: String

  """All values containing the given string."""
  traktId_contains: String

  """All values not containing the given string."""
  traktId_not_contains: String

  """All values starting with the given string."""
  traktId_starts_with: String

  """All values not starting with the given string."""
  traktId_not_starts_with: String

  """All values ending with the given string."""
  traktId_ends_with: String

  """All values not ending with the given string."""
  traktId_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

input MovieWhereUniqueInput {
  id: ID
  tmdbId: String
  imdbId: String
  traktId: String
}

type Mutation {
  createRoom(data: RoomCreateInput!): Room!
  createMovieRelation(data: MovieRelationCreateInput!): MovieRelation!
  createUser(data: UserCreateInput!): User!
  createMovie(data: MovieCreateInput!): Movie!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteUser(where: UserWhereUniqueInput!): User
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  updateManyRooms(data: RoomUpdateInput!, where: RoomWhereInput): BatchPayload!
  updateManyMovieRelations(data: MovieRelationUpdateInput!, where: MovieRelationWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyMovies(data: MovieUpdateInput!, where: MovieWhereInput): BatchPayload!
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  deleteManyMovieRelations(where: MovieRelationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  movieRelations(where: MovieRelationWhereInput, orderBy: MovieRelationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieRelation]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  room(where: RoomWhereUniqueInput!): Room
  user(where: UserWhereUniqueInput!): User
  movie(where: MovieWhereUniqueInput!): Movie
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  movieRelationsConnection(where: MovieRelationWhereInput, orderBy: MovieRelationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieRelationConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Room implements Node {
  id: ID!
  type: RoomType!
  name: String!
  owner(where: UserWhereInput): User!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type RoomConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  type: RoomType!
  name: String!
  owner: UserCreateOneWithoutOwnedRoomsInput!
  members: UserCreateManyWithoutRoomsInput
}

input RoomCreateManyWithoutMembersInput {
  create: [RoomCreateWithoutMembersInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateManyWithoutOwnerInput {
  create: [RoomCreateWithoutOwnerInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateWithoutMembersInput {
  type: RoomType!
  name: String!
  owner: UserCreateOneWithoutOwnedRoomsInput!
}

input RoomCreateWithoutOwnerInput {
  type: RoomType!
  name: String!
  members: UserCreateManyWithoutRoomsInput
}

"""An edge in a connection."""
type RoomEdge {
  """The item at the end of the edge."""
  node: Room!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoomPreviousValues {
  id: ID!
  type: RoomType!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
}

enum RoomType {
  MOVIE
}

input RoomUpdateInput {
  type: RoomType
  name: String
  owner: UserUpdateOneRequiredWithoutOwnedRoomsInput
  members: UserUpdateManyWithoutRoomsInput
}

input RoomUpdateManyWithoutMembersInput {
  create: [RoomCreateWithoutMembersInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  delete: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutMembersInput!]
}

input RoomUpdateManyWithoutOwnerInput {
  create: [RoomCreateWithoutOwnerInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  delete: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutOwnerInput!]
}

input RoomUpdateWithoutMembersDataInput {
  type: RoomType
  name: String
  owner: UserUpdateOneRequiredWithoutOwnedRoomsInput
}

input RoomUpdateWithoutOwnerDataInput {
  type: RoomType
  name: String
  members: UserUpdateManyWithoutRoomsInput
}

input RoomUpdateWithWhereUniqueWithoutMembersInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithoutMembersDataInput!
}

input RoomUpdateWithWhereUniqueWithoutOwnerInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithoutOwnerDataInput!
}

input RoomUpsertWithWhereUniqueWithoutMembersInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithoutMembersDataInput!
  create: RoomCreateWithoutMembersInput!
}

input RoomUpsertWithWhereUniqueWithoutOwnerInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithoutOwnerDataInput!
  create: RoomCreateWithoutOwnerInput!
}

input RoomWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: RoomType

  """All values that are not equal to given value."""
  type_not: RoomType

  """All values that are contained in given list."""
  type_in: [RoomType!]

  """All values that are not contained in given list."""
  type_not_in: [RoomType!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  owner: UserWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
}

input RoomWhereUniqueInput {
  id: ID
}

type Subscription {
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  movieRelation(where: MovieRelationSubscriptionWhereInput): MovieRelationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  movies(where: MovieRelationWhereInput, orderBy: MovieRelationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieRelation!]
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  ownedRooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyInput
  movies: MovieRelationCreateManyInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutOwnedRoomsInput {
  create: UserCreateWithoutOwnedRoomsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOwnedRoomsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyInput
  movies: MovieRelationCreateManyInput
  rooms: RoomCreateManyWithoutMembersInput
}

input UserCreateWithoutRoomsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyInput
  movies: MovieRelationCreateManyInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  nickname_ASC
  nickname_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyInput
  movies: MovieRelationUpdateManyInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyInput
  movies: MovieRelationUpdateManyInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoomsInput!]
}

input UserUpdateOneRequiredWithoutOwnedRoomsInput {
  create: UserCreateWithoutOwnedRoomsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutOwnedRoomsDataInput
  upsert: UserUpsertWithoutOwnedRoomsInput
}

input UserUpdateWithoutOwnedRoomsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyInput
  movies: MovieRelationUpdateManyInput
  rooms: RoomUpdateManyWithoutMembersInput
}

input UserUpdateWithoutRoomsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyInput
  movies: MovieRelationUpdateManyInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoomsDataInput!
}

input UserUpsertWithoutOwnedRoomsInput {
  update: UserUpdateWithoutOwnedRoomsDataInput!
  create: UserCreateWithoutOwnedRoomsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRoomsDataInput!
  create: UserCreateWithoutRoomsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  nickname: String

  """All values that are not equal to given value."""
  nickname_not: String

  """All values that are contained in given list."""
  nickname_in: [String!]

  """All values that are not contained in given list."""
  nickname_not_in: [String!]

  """All values less than the given value."""
  nickname_lt: String

  """All values less than or equal the given value."""
  nickname_lte: String

  """All values greater than the given value."""
  nickname_gt: String

  """All values greater than or equal the given value."""
  nickname_gte: String

  """All values containing the given string."""
  nickname_contains: String

  """All values not containing the given string."""
  nickname_not_contains: String

  """All values starting with the given string."""
  nickname_starts_with: String

  """All values not starting with the given string."""
  nickname_not_starts_with: String

  """All values ending with the given string."""
  nickname_ends_with: String

  """All values not ending with the given string."""
  nickname_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  movies_every: MovieRelationWhereInput
  movies_some: MovieRelationWhereInput
  movies_none: MovieRelationWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
  ownedRooms_every: RoomWhereInput
  ownedRooms_some: RoomWhereInput
  ownedRooms_none: RoomWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  nickname: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type RoomOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'nickname_ASC' |
  'nickname_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MovieRelationOrderByInput =   'watched_ASC' |
  'watched_DESC' |
  'watchlisted_ASC' |
  'watchlisted_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MovieOrderByInput =   'id_ASC' |
  'id_DESC' |
  'tmdbId_ASC' |
  'tmdbId_DESC' |
  'imdbId_ASC' |
  'imdbId_DESC' |
  'traktId_ASC' |
  'traktId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type RoomType =   'MOVIE'

export interface RoomCreateManyWithoutOwnerInput {
  create?: RoomCreateWithoutOwnerInput[] | RoomCreateWithoutOwnerInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
}

export interface RoomWhereInput {
  AND?: RoomWhereInput[] | RoomWhereInput
  OR?: RoomWhereInput[] | RoomWhereInput
  NOT?: RoomWhereInput[] | RoomWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: RoomType
  type_not?: RoomType
  type_in?: RoomType[] | RoomType
  type_not_in?: RoomType[] | RoomType
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  owner?: UserWhereInput
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
}

export interface RoomUpdateInput {
  type?: RoomType
  name?: String
  owner?: UserUpdateOneRequiredWithoutOwnedRoomsInput
  members?: UserUpdateManyWithoutRoomsInput
}

export interface MovieWhereInput {
  AND?: MovieWhereInput[] | MovieWhereInput
  OR?: MovieWhereInput[] | MovieWhereInput
  NOT?: MovieWhereInput[] | MovieWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  tmdbId?: String
  tmdbId_not?: String
  tmdbId_in?: String[] | String
  tmdbId_not_in?: String[] | String
  tmdbId_lt?: String
  tmdbId_lte?: String
  tmdbId_gt?: String
  tmdbId_gte?: String
  tmdbId_contains?: String
  tmdbId_not_contains?: String
  tmdbId_starts_with?: String
  tmdbId_not_starts_with?: String
  tmdbId_ends_with?: String
  tmdbId_not_ends_with?: String
  imdbId?: String
  imdbId_not?: String
  imdbId_in?: String[] | String
  imdbId_not_in?: String[] | String
  imdbId_lt?: String
  imdbId_lte?: String
  imdbId_gt?: String
  imdbId_gte?: String
  imdbId_contains?: String
  imdbId_not_contains?: String
  imdbId_starts_with?: String
  imdbId_not_starts_with?: String
  imdbId_ends_with?: String
  imdbId_not_ends_with?: String
  traktId?: String
  traktId_not?: String
  traktId_in?: String[] | String
  traktId_not_in?: String[] | String
  traktId_lt?: String
  traktId_lte?: String
  traktId_gt?: String
  traktId_gte?: String
  traktId_contains?: String
  traktId_not_contains?: String
  traktId_starts_with?: String
  traktId_not_starts_with?: String
  traktId_ends_with?: String
  traktId_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface UserCreateOneWithoutOwnedRoomsInput {
  create?: UserCreateWithoutOwnedRoomsInput
  connect?: UserWhereUniqueInput
}

export interface RoomUpsertWithWhereUniqueWithoutMembersInput {
  where: RoomWhereUniqueInput
  update: RoomUpdateWithoutMembersDataInput
  create: RoomCreateWithoutMembersInput
}

export interface UserCreateWithoutOwnedRoomsInput {
  email: String
  password: String
  nickname: String
  firstName?: String
  lastName?: String
  friends?: UserCreateManyInput
  movies?: MovieRelationCreateManyInput
  rooms?: RoomCreateManyWithoutMembersInput
}

export interface UserUpdateOneRequiredWithoutOwnedRoomsInput {
  create?: UserCreateWithoutOwnedRoomsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutOwnedRoomsDataInput
  upsert?: UserUpsertWithoutOwnedRoomsInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface MovieSubscriptionWhereInput {
  AND?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  OR?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  NOT?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MovieWhereInput
}

export interface UserCreateInput {
  email: String
  password: String
  nickname: String
  firstName?: String
  lastName?: String
  friends?: UserCreateManyInput
  movies?: MovieRelationCreateManyInput
  rooms?: RoomCreateManyWithoutMembersInput
  ownedRooms?: RoomCreateManyWithoutOwnerInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  nickname?: String
  nickname_not?: String
  nickname_in?: String[] | String
  nickname_not_in?: String[] | String
  nickname_lt?: String
  nickname_lte?: String
  nickname_gt?: String
  nickname_gte?: String
  nickname_contains?: String
  nickname_not_contains?: String
  nickname_starts_with?: String
  nickname_not_starts_with?: String
  nickname_ends_with?: String
  nickname_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  friends_every?: UserWhereInput
  friends_some?: UserWhereInput
  friends_none?: UserWhereInput
  movies_every?: MovieRelationWhereInput
  movies_some?: MovieRelationWhereInput
  movies_none?: MovieRelationWhereInput
  rooms_every?: RoomWhereInput
  rooms_some?: RoomWhereInput
  rooms_none?: RoomWhereInput
  ownedRooms_every?: RoomWhereInput
  ownedRooms_some?: RoomWhereInput
  ownedRooms_none?: RoomWhereInput
}

export interface MovieRelationCreateManyInput {
  create?: MovieRelationCreateInput[] | MovieRelationCreateInput
}

export interface MovieRelationSubscriptionWhereInput {
  AND?: MovieRelationSubscriptionWhereInput[] | MovieRelationSubscriptionWhereInput
  OR?: MovieRelationSubscriptionWhereInput[] | MovieRelationSubscriptionWhereInput
  NOT?: MovieRelationSubscriptionWhereInput[] | MovieRelationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MovieRelationWhereInput
}

export interface MovieRelationCreateInput {
  watched: Boolean
  watchlisted: Boolean
  movie: MovieCreateOneInput
}

export interface RoomWhereUniqueInput {
  id?: ID_Input
}

export interface MovieCreateOneInput {
  create?: MovieCreateInput
  connect?: MovieWhereUniqueInput
}

export interface MovieWhereUniqueInput {
  id?: ID_Input
  tmdbId?: String
  imdbId?: String
  traktId?: String
}

export interface MovieCreateInput {
  tmdbId?: String
  imdbId?: String
  traktId?: String
}

export interface MovieUpdateDataInput {
  tmdbId?: String
  imdbId?: String
  traktId?: String
}

export interface RoomCreateManyWithoutMembersInput {
  create?: RoomCreateWithoutMembersInput[] | RoomCreateWithoutMembersInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
}

export interface MovieRelationUpdateInput {
  watched?: Boolean
  watchlisted?: Boolean
  movie?: MovieUpdateOneRequiredInput
}

export interface RoomCreateWithoutMembersInput {
  type: RoomType
  name: String
  owner: UserCreateOneWithoutOwnedRoomsInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  nickname?: String
  firstName?: String
  lastName?: String
  friends?: UserUpdateManyInput
  movies?: MovieRelationUpdateManyInput
  rooms?: RoomUpdateManyWithoutMembersInput
  ownedRooms?: RoomUpdateManyWithoutOwnerInput
}

export interface RoomUpdateWithoutOwnerDataInput {
  type?: RoomType
  name?: String
  members?: UserUpdateManyWithoutRoomsInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface RoomCreateWithoutOwnerInput {
  type: RoomType
  name: String
  members?: UserCreateManyWithoutRoomsInput
}

export interface UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutRoomsDataInput
  create: UserCreateWithoutRoomsInput
}

export interface UserCreateManyWithoutRoomsInput {
  create?: UserCreateWithoutRoomsInput[] | UserCreateWithoutRoomsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutRoomsDataInput
}

export interface UserCreateWithoutRoomsInput {
  email: String
  password: String
  nickname: String
  firstName?: String
  lastName?: String
  friends?: UserCreateManyInput
  movies?: MovieRelationCreateManyInput
  ownedRooms?: RoomCreateManyWithoutOwnerInput
}

export interface RoomCreateInput {
  type: RoomType
  name: String
  owner: UserCreateOneWithoutOwnedRoomsInput
  members?: UserCreateManyWithoutRoomsInput
}

export interface RoomUpdateWithWhereUniqueWithoutOwnerInput {
  where: RoomWhereUniqueInput
  data: RoomUpdateWithoutOwnerDataInput
}

export interface MovieRelationWhereInput {
  AND?: MovieRelationWhereInput[] | MovieRelationWhereInput
  OR?: MovieRelationWhereInput[] | MovieRelationWhereInput
  NOT?: MovieRelationWhereInput[] | MovieRelationWhereInput
  watched?: Boolean
  watched_not?: Boolean
  watchlisted?: Boolean
  watchlisted_not?: Boolean
  movie?: MovieWhereInput
}

export interface RoomUpdateManyWithoutOwnerInput {
  create?: RoomCreateWithoutOwnerInput[] | RoomCreateWithoutOwnerInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  disconnect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  delete?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  update?: RoomUpdateWithWhereUniqueWithoutOwnerInput[] | RoomUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput[] | RoomUpsertWithWhereUniqueWithoutOwnerInput
}

export interface RoomSubscriptionWhereInput {
  AND?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  OR?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  NOT?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoomWhereInput
}

export interface UserUpdateWithoutOwnedRoomsDataInput {
  email?: String
  password?: String
  nickname?: String
  firstName?: String
  lastName?: String
  friends?: UserUpdateManyInput
  movies?: MovieRelationUpdateManyInput
  rooms?: RoomUpdateManyWithoutMembersInput
}

export interface MovieUpsertNestedInput {
  update: MovieUpdateDataInput
  create: MovieCreateInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface MovieUpdateInput {
  tmdbId?: String
  imdbId?: String
  traktId?: String
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface RoomUpsertWithWhereUniqueWithoutOwnerInput {
  where: RoomWhereUniqueInput
  update: RoomUpdateWithoutOwnerDataInput
  create: RoomCreateWithoutOwnerInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  nickname?: String
  firstName?: String
  lastName?: String
  friends?: UserUpdateManyInput
  movies?: MovieRelationUpdateManyInput
  rooms?: RoomUpdateManyWithoutMembersInput
  ownedRooms?: RoomUpdateManyWithoutOwnerInput
}

export interface UserUpdateManyWithoutRoomsInput {
  create?: UserCreateWithoutRoomsInput[] | UserCreateWithoutRoomsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutRoomsInput[] | UserUpdateWithWhereUniqueWithoutRoomsInput
  upsert?: UserUpsertWithWhereUniqueWithoutRoomsInput[] | UserUpsertWithWhereUniqueWithoutRoomsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface RoomUpdateWithoutMembersDataInput {
  type?: RoomType
  name?: String
  owner?: UserUpdateOneRequiredWithoutOwnedRoomsInput
}

export interface RoomUpdateWithWhereUniqueWithoutMembersInput {
  where: RoomWhereUniqueInput
  data: RoomUpdateWithoutMembersDataInput
}

export interface RoomUpdateManyWithoutMembersInput {
  create?: RoomCreateWithoutMembersInput[] | RoomCreateWithoutMembersInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  disconnect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  delete?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  update?: RoomUpdateWithWhereUniqueWithoutMembersInput[] | RoomUpdateWithWhereUniqueWithoutMembersInput
  upsert?: RoomUpsertWithWhereUniqueWithoutMembersInput[] | RoomUpsertWithWhereUniqueWithoutMembersInput
}

export interface MovieRelationUpdateManyInput {
  create?: MovieRelationCreateInput[] | MovieRelationCreateInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  nickname?: String
}

export interface UserUpdateWithoutRoomsDataInput {
  email?: String
  password?: String
  nickname?: String
  firstName?: String
  lastName?: String
  friends?: UserUpdateManyInput
  movies?: MovieRelationUpdateManyInput
  ownedRooms?: RoomUpdateManyWithoutOwnerInput
}

export interface UserUpsertWithoutOwnedRoomsInput {
  update: UserUpdateWithoutOwnedRoomsDataInput
  create: UserCreateWithoutOwnedRoomsInput
}

export interface MovieUpdateOneRequiredInput {
  create?: MovieCreateInput
  connect?: MovieWhereUniqueInput
  update?: MovieUpdateDataInput
  upsert?: MovieUpsertNestedInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface MoviePreviousValues {
  id: ID_Output
  tmdbId?: String
  imdbId?: String
  traktId?: String
  createdAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface RoomEdge {
  node: Room
  cursor: String
}

export interface Room extends Node {
  id: ID_Output
  type: RoomType
  name: String
  owner: User
  members?: User[]
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateRoom {
  count: Int
}

export interface MovieRelation {
  watched: Boolean
  watchlisted: Boolean
  movie: Movie
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  nickname: String
  firstName?: String
  lastName?: String
  friends?: User[]
  createdAt: DateTime
  movies?: MovieRelation[]
  rooms?: Room[]
  ownedRooms?: Room[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateMovie {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface MovieConnection {
  pageInfo: PageInfo
  edges: MovieEdge[]
  aggregate: AggregateMovie
}

/*
 * A connection to a list of items.

 */
export interface RoomConnection {
  pageInfo: PageInfo
  edges: RoomEdge[]
  aggregate: AggregateRoom
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  nickname: String
  firstName?: String
  lastName?: String
  createdAt: DateTime
}

export interface AggregateMovieRelation {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface MovieRelationConnection {
  pageInfo: PageInfo
  edges: MovieRelationEdge[]
  aggregate: AggregateMovieRelation
}

export interface RoomSubscriptionPayload {
  mutation: MutationType
  node?: Room
  updatedFields?: String[]
  previousValues?: RoomPreviousValues
}

export interface MovieSubscriptionPayload {
  mutation: MutationType
  node?: Movie
  updatedFields?: String[]
  previousValues?: MoviePreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface MovieRelationPreviousValues {
  watched: Boolean
  watchlisted: Boolean
}

export interface MovieRelationSubscriptionPayload {
  mutation: MutationType
  node?: MovieRelation
  updatedFields?: String[]
  previousValues?: MovieRelationPreviousValues
}

export interface Movie extends Node {
  id: ID_Output
  tmdbId?: String
  imdbId?: String
  traktId?: String
  createdAt: DateTime
}

export interface RoomPreviousValues {
  id: ID_Output
  type: RoomType
  name: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface MovieEdge {
  node: Movie
  cursor: String
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface MovieRelationEdge {
  node: MovieRelation
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string