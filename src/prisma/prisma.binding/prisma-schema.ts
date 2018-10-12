export const typeDefs = /* GraphQL */ `type AggregateFriendRequest {
  count: Int!
}

type AggregateMovie {
  count: Int!
}

type AggregateMovieLink {
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

type FriendRequest {
  id: ID!
  source: User!
  target: User!
  status: FriendRequestStatus!
  createdAt: DateTime!
}

type FriendRequestConnection {
  pageInfo: PageInfo!
  edges: [FriendRequestEdge]!
  aggregate: AggregateFriendRequest!
}

input FriendRequestCreateInput {
  source: UserCreateOneWithoutFriendRequestsEmittedInput!
  target: UserCreateOneWithoutFriendRequestsReceivedInput!
  status: FriendRequestStatus
}

input FriendRequestCreateManyWithoutSourceInput {
  create: [FriendRequestCreateWithoutSourceInput!]
  connect: [FriendRequestWhereUniqueInput!]
}

input FriendRequestCreateManyWithoutTargetInput {
  create: [FriendRequestCreateWithoutTargetInput!]
  connect: [FriendRequestWhereUniqueInput!]
}

input FriendRequestCreateWithoutSourceInput {
  target: UserCreateOneWithoutFriendRequestsReceivedInput!
  status: FriendRequestStatus
}

input FriendRequestCreateWithoutTargetInput {
  source: UserCreateOneWithoutFriendRequestsEmittedInput!
  status: FriendRequestStatus
}

type FriendRequestEdge {
  node: FriendRequest!
  cursor: String!
}

enum FriendRequestOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FriendRequestPreviousValues {
  id: ID!
  status: FriendRequestStatus!
  createdAt: DateTime!
}

enum FriendRequestStatus {
  PENDING
  APPROUVED
  BLOCKED
}

type FriendRequestSubscriptionPayload {
  mutation: MutationType!
  node: FriendRequest
  updatedFields: [String!]
  previousValues: FriendRequestPreviousValues
}

input FriendRequestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FriendRequestWhereInput
  AND: [FriendRequestSubscriptionWhereInput!]
  OR: [FriendRequestSubscriptionWhereInput!]
  NOT: [FriendRequestSubscriptionWhereInput!]
}

input FriendRequestUpdateInput {
  source: UserUpdateOneRequiredWithoutFriendRequestsEmittedInput
  target: UserUpdateOneRequiredWithoutFriendRequestsReceivedInput
  status: FriendRequestStatus
}

input FriendRequestUpdateManyWithoutSourceInput {
  create: [FriendRequestCreateWithoutSourceInput!]
  delete: [FriendRequestWhereUniqueInput!]
  connect: [FriendRequestWhereUniqueInput!]
  disconnect: [FriendRequestWhereUniqueInput!]
  update: [FriendRequestUpdateWithWhereUniqueWithoutSourceInput!]
  upsert: [FriendRequestUpsertWithWhereUniqueWithoutSourceInput!]
}

input FriendRequestUpdateManyWithoutTargetInput {
  create: [FriendRequestCreateWithoutTargetInput!]
  delete: [FriendRequestWhereUniqueInput!]
  connect: [FriendRequestWhereUniqueInput!]
  disconnect: [FriendRequestWhereUniqueInput!]
  update: [FriendRequestUpdateWithWhereUniqueWithoutTargetInput!]
  upsert: [FriendRequestUpsertWithWhereUniqueWithoutTargetInput!]
}

input FriendRequestUpdateWithoutSourceDataInput {
  target: UserUpdateOneRequiredWithoutFriendRequestsReceivedInput
  status: FriendRequestStatus
}

input FriendRequestUpdateWithoutTargetDataInput {
  source: UserUpdateOneRequiredWithoutFriendRequestsEmittedInput
  status: FriendRequestStatus
}

input FriendRequestUpdateWithWhereUniqueWithoutSourceInput {
  where: FriendRequestWhereUniqueInput!
  data: FriendRequestUpdateWithoutSourceDataInput!
}

input FriendRequestUpdateWithWhereUniqueWithoutTargetInput {
  where: FriendRequestWhereUniqueInput!
  data: FriendRequestUpdateWithoutTargetDataInput!
}

input FriendRequestUpsertWithWhereUniqueWithoutSourceInput {
  where: FriendRequestWhereUniqueInput!
  update: FriendRequestUpdateWithoutSourceDataInput!
  create: FriendRequestCreateWithoutSourceInput!
}

input FriendRequestUpsertWithWhereUniqueWithoutTargetInput {
  where: FriendRequestWhereUniqueInput!
  update: FriendRequestUpdateWithoutTargetDataInput!
  create: FriendRequestCreateWithoutTargetInput!
}

input FriendRequestWhereInput {
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
  source: UserWhereInput
  target: UserWhereInput
  status: FriendRequestStatus
  status_not: FriendRequestStatus
  status_in: [FriendRequestStatus!]
  status_not_in: [FriendRequestStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [FriendRequestWhereInput!]
  OR: [FriendRequestWhereInput!]
  NOT: [FriendRequestWhereInput!]
}

input FriendRequestWhereUniqueInput {
  id: ID
}

scalar Long

type Movie {
  id: ID!
  tmdbId: String
  imdbId: String
  traktId: String
  movieLinks(where: MovieLinkWhereInput, orderBy: MovieLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieLink!]
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
  movieLinks: MovieLinkCreateManyWithoutMovieInput
}

input MovieCreateOneWithoutMovieLinksInput {
  create: MovieCreateWithoutMovieLinksInput
  connect: MovieWhereUniqueInput
}

input MovieCreateWithoutMovieLinksInput {
  tmdbId: String
  imdbId: String
  traktId: String
}

type MovieEdge {
  node: Movie!
  cursor: String!
}

type MovieLink {
  watched: Boolean!
  watchlisted: Boolean!
  movie: Movie!
  user: User!
}

type MovieLinkConnection {
  pageInfo: PageInfo!
  edges: [MovieLinkEdge]!
  aggregate: AggregateMovieLink!
}

input MovieLinkCreateInput {
  watched: Boolean
  watchlisted: Boolean
  movie: MovieCreateOneWithoutMovieLinksInput!
  user: UserCreateOneWithoutMovieLinksInput!
}

input MovieLinkCreateManyWithoutMovieInput {
  create: [MovieLinkCreateWithoutMovieInput!]
}

input MovieLinkCreateManyWithoutUserInput {
  create: [MovieLinkCreateWithoutUserInput!]
}

input MovieLinkCreateWithoutMovieInput {
  watched: Boolean
  watchlisted: Boolean
  user: UserCreateOneWithoutMovieLinksInput!
}

input MovieLinkCreateWithoutUserInput {
  watched: Boolean
  watchlisted: Boolean
  movie: MovieCreateOneWithoutMovieLinksInput!
}

type MovieLinkEdge {
  node: MovieLink!
  cursor: String!
}

enum MovieLinkOrderByInput {
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

type MovieLinkPreviousValues {
  watched: Boolean!
  watchlisted: Boolean!
}

type MovieLinkSubscriptionPayload {
  mutation: MutationType!
  node: MovieLink
  updatedFields: [String!]
  previousValues: MovieLinkPreviousValues
}

input MovieLinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieLinkWhereInput
  AND: [MovieLinkSubscriptionWhereInput!]
  OR: [MovieLinkSubscriptionWhereInput!]
  NOT: [MovieLinkSubscriptionWhereInput!]
}

input MovieLinkUpdateInput {
  watched: Boolean
  watchlisted: Boolean
  movie: MovieUpdateOneRequiredWithoutMovieLinksInput
  user: UserUpdateOneRequiredWithoutMovieLinksInput
}

input MovieLinkUpdateManyWithoutMovieInput {
  create: [MovieLinkCreateWithoutMovieInput!]
}

input MovieLinkUpdateManyWithoutUserInput {
  create: [MovieLinkCreateWithoutUserInput!]
}

input MovieLinkWhereInput {
  watched: Boolean
  watched_not: Boolean
  watchlisted: Boolean
  watchlisted_not: Boolean
  movie: MovieWhereInput
  user: UserWhereInput
  AND: [MovieLinkWhereInput!]
  OR: [MovieLinkWhereInput!]
  NOT: [MovieLinkWhereInput!]
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

input MovieUpdateInput {
  tmdbId: String
  imdbId: String
  traktId: String
  movieLinks: MovieLinkUpdateManyWithoutMovieInput
}

input MovieUpdateOneRequiredWithoutMovieLinksInput {
  create: MovieCreateWithoutMovieLinksInput
  update: MovieUpdateWithoutMovieLinksDataInput
  upsert: MovieUpsertWithoutMovieLinksInput
  connect: MovieWhereUniqueInput
}

input MovieUpdateWithoutMovieLinksDataInput {
  tmdbId: String
  imdbId: String
  traktId: String
}

input MovieUpsertWithoutMovieLinksInput {
  update: MovieUpdateWithoutMovieLinksDataInput!
  create: MovieCreateWithoutMovieLinksInput!
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
  movieLinks_every: MovieLinkWhereInput
  movieLinks_some: MovieLinkWhereInput
  movieLinks_none: MovieLinkWhereInput
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
  createFriendRequest(data: FriendRequestCreateInput!): FriendRequest!
  updateFriendRequest(data: FriendRequestUpdateInput!, where: FriendRequestWhereUniqueInput!): FriendRequest
  updateManyFriendRequests(data: FriendRequestUpdateInput!, where: FriendRequestWhereInput): BatchPayload!
  upsertFriendRequest(where: FriendRequestWhereUniqueInput!, create: FriendRequestCreateInput!, update: FriendRequestUpdateInput!): FriendRequest!
  deleteFriendRequest(where: FriendRequestWhereUniqueInput!): FriendRequest
  deleteManyFriendRequests(where: FriendRequestWhereInput): BatchPayload!
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  createMovieLink(data: MovieLinkCreateInput!): MovieLink!
  updateManyMovieLinks(data: MovieLinkUpdateInput!, where: MovieLinkWhereInput): BatchPayload!
  deleteManyMovieLinks(where: MovieLinkWhereInput): BatchPayload!
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
  friendRequest(where: FriendRequestWhereUniqueInput!): FriendRequest
  friendRequests(where: FriendRequestWhereInput, orderBy: FriendRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FriendRequest]!
  friendRequestsConnection(where: FriendRequestWhereInput, orderBy: FriendRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FriendRequestConnection!
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  movieLinks(where: MovieLinkWhereInput, orderBy: MovieLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieLink]!
  movieLinksConnection(where: MovieLinkWhereInput, orderBy: MovieLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieLinkConnection!
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
  friendRequest(where: FriendRequestSubscriptionWhereInput): FriendRequestSubscriptionPayload
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  movieLink(where: MovieLinkSubscriptionWhereInput): MovieLinkSubscriptionPayload
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
  friendRequestsEmitted(where: FriendRequestWhereInput, orderBy: FriendRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FriendRequest!]
  friendRequestsReceived(where: FriendRequestWhereInput, orderBy: FriendRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FriendRequest!]
  movieLinks(where: MovieLinkWhereInput, orderBy: MovieLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieLink!]
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  ownedRooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  createdAt: DateTime!
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
  friendRequestsEmitted: FriendRequestCreateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestCreateManyWithoutTargetInput
  movieLinks: MovieLinkCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutFriendRequestsEmittedInput {
  create: UserCreateWithoutFriendRequestsEmittedInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFriendRequestsReceivedInput {
  create: UserCreateWithoutFriendRequestsReceivedInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMovieLinksInput {
  create: UserCreateWithoutMovieLinksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedRoomsInput {
  create: UserCreateWithoutOwnedRoomsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFriendRequestsEmittedInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friendRequestsReceived: FriendRequestCreateManyWithoutTargetInput
  movieLinks: MovieLinkCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateWithoutFriendRequestsReceivedInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestCreateManyWithoutSourceInput
  movieLinks: MovieLinkCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateWithoutMovieLinksInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestCreateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestCreateManyWithoutTargetInput
  rooms: RoomCreateManyWithoutMembersInput
  ownedRooms: RoomCreateManyWithoutOwnerInput
}

input UserCreateWithoutOwnedRoomsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestCreateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestCreateManyWithoutTargetInput
  movieLinks: MovieLinkCreateManyWithoutUserInput
  rooms: RoomCreateManyWithoutMembersInput
}

input UserCreateWithoutRoomsInput {
  email: String!
  password: String!
  nickname: String!
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestCreateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestCreateManyWithoutTargetInput
  movieLinks: MovieLinkCreateManyWithoutUserInput
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
  friendRequestsEmitted: FriendRequestUpdateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestUpdateManyWithoutTargetInput
  movieLinks: MovieLinkUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoomsInput!]
}

input UserUpdateOneRequiredWithoutFriendRequestsEmittedInput {
  create: UserCreateWithoutFriendRequestsEmittedInput
  update: UserUpdateWithoutFriendRequestsEmittedDataInput
  upsert: UserUpsertWithoutFriendRequestsEmittedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutFriendRequestsReceivedInput {
  create: UserCreateWithoutFriendRequestsReceivedInput
  update: UserUpdateWithoutFriendRequestsReceivedDataInput
  upsert: UserUpsertWithoutFriendRequestsReceivedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMovieLinksInput {
  create: UserCreateWithoutMovieLinksInput
  update: UserUpdateWithoutMovieLinksDataInput
  upsert: UserUpsertWithoutMovieLinksInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwnedRoomsInput {
  create: UserCreateWithoutOwnedRoomsInput
  update: UserUpdateWithoutOwnedRoomsDataInput
  upsert: UserUpsertWithoutOwnedRoomsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFriendRequestsEmittedDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friendRequestsReceived: FriendRequestUpdateManyWithoutTargetInput
  movieLinks: MovieLinkUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutFriendRequestsReceivedDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestUpdateManyWithoutSourceInput
  movieLinks: MovieLinkUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutMovieLinksDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestUpdateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestUpdateManyWithoutTargetInput
  rooms: RoomUpdateManyWithoutMembersInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOwnedRoomsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestUpdateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestUpdateManyWithoutTargetInput
  movieLinks: MovieLinkUpdateManyWithoutUserInput
  rooms: RoomUpdateManyWithoutMembersInput
}

input UserUpdateWithoutRoomsDataInput {
  email: String
  password: String
  nickname: String
  firstName: String
  lastName: String
  friendRequestsEmitted: FriendRequestUpdateManyWithoutSourceInput
  friendRequestsReceived: FriendRequestUpdateManyWithoutTargetInput
  movieLinks: MovieLinkUpdateManyWithoutUserInput
  ownedRooms: RoomUpdateManyWithoutOwnerInput
}

input UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoomsDataInput!
}

input UserUpsertWithoutFriendRequestsEmittedInput {
  update: UserUpdateWithoutFriendRequestsEmittedDataInput!
  create: UserCreateWithoutFriendRequestsEmittedInput!
}

input UserUpsertWithoutFriendRequestsReceivedInput {
  update: UserUpdateWithoutFriendRequestsReceivedDataInput!
  create: UserCreateWithoutFriendRequestsReceivedInput!
}

input UserUpsertWithoutMovieLinksInput {
  update: UserUpdateWithoutMovieLinksDataInput!
  create: UserCreateWithoutMovieLinksInput!
}

input UserUpsertWithoutOwnedRoomsInput {
  update: UserUpdateWithoutOwnedRoomsDataInput!
  create: UserCreateWithoutOwnedRoomsInput!
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
  friendRequestsEmitted_every: FriendRequestWhereInput
  friendRequestsEmitted_some: FriendRequestWhereInput
  friendRequestsEmitted_none: FriendRequestWhereInput
  friendRequestsReceived_every: FriendRequestWhereInput
  friendRequestsReceived_some: FriendRequestWhereInput
  friendRequestsReceived_none: FriendRequestWhereInput
  movieLinks_every: MovieLinkWhereInput
  movieLinks_some: MovieLinkWhereInput
  movieLinks_none: MovieLinkWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
  ownedRooms_every: RoomWhereInput
  ownedRooms_some: RoomWhereInput
  ownedRooms_none: RoomWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  nickname: String
}
`;
