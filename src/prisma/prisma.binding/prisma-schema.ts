export const typeDefs = /* GraphQL */ `type AggregateMovie {
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
  count: Long!
}

scalar DateTime

scalar Long

type Movie {
  id: ID!
  tmdbId: String
  imdbId: String
  traktId: String
  createdAt: DateTime!
}

type MovieConnection {
  pageInfo: PageInfo!
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

type MovieEdge {
  node: Movie!
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
  movie: Movie!
  user: User!
}

type MovieRelationConnection {
  pageInfo: PageInfo!
  edges: [MovieRelationEdge]!
  aggregate: AggregateMovieRelation!
}

input MovieRelationCreateInput {
  watched: Boolean!
  watchlisted: Boolean!
  movie: MovieCreateOneInput!
  user: UserCreateOneWithoutMoviesInput!
}

input MovieRelationCreateManyWithoutUserInput {
  create: [MovieRelationCreateWithoutUserInput!]
}

input MovieRelationCreateWithoutUserInput {
  watched: Boolean!
  watchlisted: Boolean!
  movie: MovieCreateOneInput!
}

type MovieRelationEdge {
  node: MovieRelation!
  cursor: String!
}

enum MovieRelationOrderByInput {
  watched_ASC
  watched_DESC
  watchlisted_ASC
  watchlisted_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieRelationWhereInput
  AND: [MovieRelationSubscriptionWhereInput!]
  OR: [MovieRelationSubscriptionWhereInput!]
  NOT: [MovieRelationSubscriptionWhereInput!]
}

input MovieRelationUpdateInput {
  watched: Boolean
  watchlisted: Boolean
  movie: MovieUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMoviesInput
}

input MovieRelationUpdateManyWithoutUserInput {
  create: [MovieRelationCreateWithoutUserInput!]
}

input MovieRelationWhereInput {
  watched: Boolean
  watched_not: Boolean
  watchlisted: Boolean
  watchlisted_not: Boolean
  movie: MovieWhereInput
  user: UserWhereInput
  AND: [MovieRelationWhereInput!]
  OR: [MovieRelationWhereInput!]
  NOT: [MovieRelationWhereInput!]
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
  AND: [MovieSubscriptionWhereInput!]
  OR: [MovieSubscriptionWhereInput!]
  NOT: [MovieSubscriptionWhereInput!]
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
  update: MovieUpdateDataInput
  upsert: MovieUpsertNestedInput
  connect: MovieWhereUniqueInput
}

input MovieUpsertNestedInput {
  update: MovieUpdateDataInput!
  create: MovieCreateInput!
}

input MovieWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  tmdbId: String
  tmdbId_not: String
  tmdbId_in: [String!]
  tmdbId_not_in: [String!]
  tmdbId_lt: String
  tmdbId_lte: String
  tmdbId_gt: String
  tmdbId_gte: String
  tmdbId_contains: String
  tmdbId_not_contains: String
  tmdbId_starts_with: String
  tmdbId_not_starts_with: String
  tmdbId_ends_with: String
  tmdbId_not_ends_with: String
  imdbId: String
  imdbId_not: String
  imdbId_in: [String!]
  imdbId_not_in: [String!]
  imdbId_lt: String
  imdbId_lte: String
  imdbId_gt: String
  imdbId_gte: String
  imdbId_contains: String
  imdbId_not_contains: String
  imdbId_starts_with: String
  imdbId_not_starts_with: String
  imdbId_ends_with: String
  imdbId_not_ends_with: String
  traktId: String
  traktId_not: String
  traktId_in: [String!]
  traktId_not_in: [String!]
  traktId_lt: String
  traktId_lte: String
  traktId_gt: String
  traktId_gte: String
  traktId_contains: String
  traktId_not_contains: String
  traktId_starts_with: String
  traktId_not_starts_with: String
  traktId_ends_with: String
  traktId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MovieWhereInput!]
  OR: [MovieWhereInput!]
  NOT: [MovieWhereInput!]
}

input MovieWhereUniqueInput {
  id: ID
  tmdbId: String
  imdbId: String
  traktId: String
}

type Mutation {
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  createMovieRelation(data: MovieRelationCreateInput!): MovieRelation!
  updateManyMovieRelations(data: MovieRelationUpdateInput!, where: MovieRelationWhereInput): BatchPayload!
  deleteManyMovieRelations(where: MovieRelationWhereInput): BatchPayload!
  createRoom(data: RoomCreateInput!): Room!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateManyRooms(data: RoomUpdateInput!, where: RoomWhereInput): BatchPayload!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  movieRelations(where: MovieRelationWhereInput, orderBy: MovieRelationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieRelation]!
  movieRelationsConnection(where: MovieRelationWhereInput, orderBy: MovieRelationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieRelationConnection!
  room(where: RoomWhereUniqueInput!): Room
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Room {
  id: ID!
  type: RoomType!
  name: String!
  owner: User!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoomConnection {
  pageInfo: PageInfo!
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

type RoomEdge {
  node: Room!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
  AND: [RoomSubscriptionWhereInput!]
  OR: [RoomSubscriptionWhereInput!]
  NOT: [RoomSubscriptionWhereInput!]
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
  delete: [RoomWhereUniqueInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutMembersInput!]
}

input RoomUpdateManyWithoutOwnerInput {
  create: [RoomCreateWithoutOwnerInput!]
  delete: [RoomWhereUniqueInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: RoomType
  type_not: RoomType
  type_in: [RoomType!]
  type_not_in: [RoomType!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  owner: UserWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoomWhereInput!]
  OR: [RoomWhereInput!]
  NOT: [RoomWhereInput!]
}

input RoomWhereUniqueInput {
  id: ID
}

type Subscription {
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  movieRelation(where: MovieRelationSubscriptionWhereInput): MovieRelationSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
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

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyWithoutFriendsInput
  movies: MovieRelationCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutMoviesInput {
  create: UserCreateWithoutMoviesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedRoomsInput {
  create: UserCreateWithoutOwnedRoomsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFriendsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  movies: MovieRelationCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateWithoutMoviesInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyWithoutFriendsInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateWithoutOwnedRoomsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyWithoutFriendsInput
  movies: MovieRelationCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
}

input UserCreateWithoutRoomsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friends: UserCreateManyWithoutFriendsInput
  movies: MovieRelationCreateManyWithoutUserInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

type UserEdge {
  node: User!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyWithoutFriendsInput
  movies: MovieRelationUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFriendsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFriendsInput!]
}

input UserUpdateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoomsInput!]
}

input UserUpdateOneRequiredWithoutMoviesInput {
  create: UserCreateWithoutMoviesInput
  update: UserUpdateWithoutMoviesDataInput
  upsert: UserUpsertWithoutMoviesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwnedRoomsInput {
  create: UserCreateWithoutOwnedRoomsInput
  update: UserUpdateWithoutOwnedRoomsDataInput
  upsert: UserUpsertWithoutOwnedRoomsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFriendsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  movies: MovieRelationUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutMoviesDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyWithoutFriendsInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOwnedRoomsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyWithoutFriendsInput
  movies: MovieRelationUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
}

input UserUpdateWithoutRoomsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friends: UserUpdateManyWithoutFriendsInput
  movies: MovieRelationUpdateManyWithoutUserInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFriendsDataInput!
}

input UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoomsDataInput!
}

input UserUpsertWithoutMoviesInput {
  update: UserUpdateWithoutMoviesDataInput!
  create: UserCreateWithoutMoviesInput!
}

input UserUpsertWithoutOwnedRoomsInput {
  update: UserUpdateWithoutOwnedRoomsDataInput!
  create: UserCreateWithoutOwnedRoomsInput!
}

input UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFriendsDataInput!
  create: UserCreateWithoutFriendsInput!
}

input UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRoomsDataInput!
  create: UserCreateWithoutRoomsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  movies_every: MovieRelationWhereInput
  movies_some: MovieRelationWhereInput
  movies_none: MovieRelationWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
  ownedRooms_every: RoomWhereInput
  ownedRooms_some: RoomWhereInput
  ownedRooms_none: RoomWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  nickname: String
}
`