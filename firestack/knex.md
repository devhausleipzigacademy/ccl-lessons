# Knex

## Resources

[Knex Docs](http://knexjs.org/)

[Github Repository](https://github.com/gabrielheinrich/knex-express)

## Setting Up Knex

Install knex and sqlite3

```bash
yarn add knex sqlite3
```

Create a default knexfile using the knex cli. Here the connection configuration
between the node app and the database is setup.

```bash
yarn run knex init
```

Create a migration file. Migrations are scripts that setup the tables of a database

```bash
yarn run knex migrate:make name-of-migration
```

Create a seed. A seed file is a script that fills the database with example data

```bash
yarn run knex seed:make name-of-seed
```

Importing and configuration knex

```js
const config = require("./knexfile.js");
const knex = require("knex")(config.development);
```

## Knex Basics

### Run arbitrary sql query

```js
await knex.raw("SELECT 1 + 1;");
```

### Create table

```js
await knex.schema.createTable("plants", (table) => {
  table.increments();
  table.string("name").unique().notNullable();
  table.string("description");
  table.string("image");
  table.integer("ownerId").unsigned().references("users.id");
  table.boolean("available").defaultTo(true);
  table.timestamps(false, true);
});
```

### Run migrations on startup

```js
await knex.migrate.latest();
```

### Drop database

```bash
yarn run knex migrate:rollback --all
```

### Insert values

```js
// INSERT INTO users VALUES (...)
await knex("users").insert({
  email: "gabe@codecampleipzig.de",
  password: "Lotte123",
});
```

### Select

```js
// SELECT * FROM plants
await knex("plants").select();
// SELECT id, name, description FROM plants WHERE ownerId = 2
await knex("plants").select("id", "name", "description").where({ ownerId: 2 });
```

### Join

```js
await knex("plants")
  .select()
  .leftJoin("users", "plants.ownerId", "=", "users.id");
```

## Express Controller Examples

### Create

```js
app.post("/plants", async (req, res, next) => {
  try {
    const [id] = await knex("plants").insert(req.body);
    const plant = await knex("plants").select().where({ id });
    res.send(plant);
  } catch (error) {
    res.sendStatus(400);
  }
});
```

### Find One

```js
app.get("/plants/:id", async (req, res, next) => {
  try {
    res.send(await knex("plants").select().where({ id: req.params.id }));
  } catch {
    res.sendStatus(400);
  }
});
```

## Check Questions

- What is the difference between an ORM and a Query Builder?
- What's a database migration? How do they work?
- In which scenario is it necessary to seed a database?
- What is the purpose of the knexfile.js
- Why is it necessary to use a try catch block inside an express controller?

## Exercise

1. Come up with a simple idea for a database backed API, which exposes CRUD
   functionalities and has a data model with at least one relationship.
2. Write queries for setting up the tables in a .sql file
3. Write queries for seeding the database with test data.
4. Map out the API endpoints and write and test the corresponding queries.
5. Translate the queries into controllers in an express app using knex as an sql
   query builder. Make use of the knex documentation and the numerous examples
   it contains.
