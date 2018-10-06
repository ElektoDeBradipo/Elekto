
## Description

The backend that expose a graphql api.

## Installation

```bash
$ npm install
$ docker-compose up -d
$ npm run gen:db
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Reset database

```bash
$ prisma reset
$ prisma seed
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
