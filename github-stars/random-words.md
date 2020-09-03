# Random Words

Building a simple Rest API with node and express.

## Resources

[Express Examples](https://github.com/expressjs/express/tree/master/examples)

[Express API Reference](https://expressjs.com/en/api.html#express)

[Github Repo](https://github.com/gabrielheinrich/random-words-express)

## Github Repo Setup

```bash
yarn init
yarn add express morgan body-parser cors
touch .gitignore index.js
```

## Express Server Example

```js
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const words = ["Apple", "Orange", "Banana"];

const app = express();

// MIDDLEWARE

// Setup middleware to log requests
app.use(logger("dev"));

// Set Allow Cross Origin Header to allow any origin to make requests
app.use(cors());

// Setup middleware to automatically parse JSON
app.use(bodyParser.json());

// CONTROLLERS

// Handle a get request
app.get("/words/random", (request, response) => {
  const word = words[Math.floor(Math.random() * words.length)];
  response.send({
    word,
  });
});

app.post("/words", (request, response) => {
  const word = request.body.word;
  if (typeof word != "string") {
    throw new Error("Please provide a word in your request");
  }

  if (words.indexOf(word) != -1) {
    throw new Error(`The word ${word}" is already registered`);
  }

  words.push(word);
  response.sendStatus(201);
});

// If no other routes match, serve static files from public
app.use(express.static(__dirname + "/public"));

// STARTUP
app.listen(PORT, () => {
  console.log(`App started listening on port ${PORT}`);
});
```

### Questions

- What are shortcomings of this API?
- Why is it recommended to use `process.env.PORT` to set the port on which the
  server will run?
- What would be a use case for hosting an API and serving static files from the
  same server? What could be drawbacks of such an architecture?
- What does cors stand for? Why is it important?
- What is a middleware in express?

## Exercise

Use the random word API to get new words for the Vue Hangman.

Github Repo: <https://github.com/gabrielheinrich/pixel-arcade>

Extra Tasks

- Add the possibility to select a category
- Add better error handling.
