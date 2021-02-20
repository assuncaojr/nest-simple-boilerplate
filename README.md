<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<h1>NestSimpleBoilerplate is a super simple NestJS boilerplate project</h1>

## Description

With some packages configured:
* Swagger;
* Class Validator and Transform (validate .env vars) and url query params;
* Commitizen and Husky for Git Task Automation;
* TypeORM (mySQL)
* Docker
* Some packages will be configured soon, such as: mongoDB, Agenda and others.

## Running the app

```bash
# development
$ npm run start or yarn start

# watch mode
$ npm run start:dev or yarn start:dev

# production mode
$ npm run start:prod or yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test or yarn test

```
## Running TypeORM Migration
```bash
# docker
docker exec nestboilerplate_service yarn typeorm migration:run

# yarn
yarn typeorm migration:run
```

## License

SimpleCrud is [MIT licensed](LICENSE).
