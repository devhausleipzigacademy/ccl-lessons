# `async` & `await`

---

## Review Promises

```js
axios
  .get("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    console.log("Did you know", res.data.value);
  })
  .catch((error) => {
    console.error("Couldn't reach the API");
  });
```

---

## There's a problem: Nesting

---

```js
axios
  .get("https://api.chucknorris.io/jokes/random")
  .then((joke1) => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((joke2) => {
        axios
          .get("https://api.chucknorris.io/jokes/random")
          .then((joke3) => {
            console.log(
              "Here are three jokes:",
              joke1.data.value,
              joke2.data.value,
              joke3.data.value
            );
          })
          .catch((error) => {
            console.error("Couldn't reach the API");
          });
      })
      .catch((error) => {
        console.error("Couldn't reach the API");
      });
  })
  .catch((error) => {
    console.error("Couldn't reach the API");
  });
```

---

...this needs fixing

---

### Solution 1

# `Promise.all`

Helper function, that takes in an array of promises and returns a promise which will resolve to an array of values

---

```js
Promise.all([
  axios.get("https://api.chucknorris.io/jokes/random"),
  axios.get("https://api.chucknorris.io/jokes/random"),
  axios.get("https://api.chucknorris.io/jokes/random"),
])
  .then((res) => {
    console.log(
      "Here are three jokes:",
      res[0].data.value,
      res[1].data.value,
      res[2].data.value
    );
  })
  .catch((error) => {
    console.error(error);
  });
```

---

### Solution 2

# `async await`

New language feature, with two new keywords: `async` and `await`

---

## `async`

Create an async function

```js
async function main() {
  // Async code
}

const main = async () => {
  // Async code
};
```

---

# `await`

Wait until a promise is resolved and return the resolved value.

```js
console.log(await axios.get("https://api.chucknorris.io/..."));
```

Only available inside async functions!

---

### Promise based Code

```js
function printChuckNorrisJoke() {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      console.log("Did you know", res.data.value);
    })
    .catch((error) => {
      console.error("Couldn't reach the API");
    });
}
```

---

### With async await

```js
async function printChuckNorrisJoke() {
  try {
    const res = await axios.get("https://api.chucknorris...");
    console.log(res.data.value);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```

---

```js
function printChuckNorrisJoke() {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      console.log("Did you know", res.data.value);
    })
    .catch((error) => {
      console.error("Couldn't reach the API");
    });
}
```

```js
async function printChuckNorrisJoke() {
  try {
    const res = await axios.get("https://api.chucknorris...");
    console.log(res.data.value);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```

---

If you return a value from an async function it will be wrapped in a promise automatically

Even if you are not using await

---

```js
async function tossCoin() {
  return Math.random() < 0.5;
}

tossCoin(); // -> [Promise]
tossCoin().then((heads) => console.log(heads ? "Heads" : "Tails"));
```

---

### So here are the solutions to the nesting problem:

---

```js
async function printThreeChuckNorrisJokes() {
  try {
    const joke1 = await axios.get("https://api.chucknorris...");
    const joke2 = await axios.get("https://api.chucknorris...");
    const joke3 = await axios.get("https://api.chucknorris...");
    console.log(joke1.data.value);
    console.log(joke2.data.value);
    console.log(joke3.data.value);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```

---

```js
async function printChuckNorrisJokes(count) {
  try {
    const jokes = [];

    for (let i = 0; i < count; ++i) {
      jokes.push(await axios.get("https://api.chucknorris..."));
    }

    console.log(jokes.map((res) => res.data.value).join("\n"));
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```
