# Fetch

### Axios

Axios is a javascript library, which lets you trigger HTTP Requests.
You can use it to call an API from Javascript

<https://github.com/axios/axios>

#### Include through CDN

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### Calling an API

```js
axios({
  method: "get",
  url: "https://api.chucknorris.io/jokes/randoms",
  /* more options, like params, data, headers, timeout etc...*/
})
  .then((response) => {
    // This code will run as soon as the request is resolved
    const status = response.status; // The status code, most often 200
    const data = response.data; // The actual response data
    console.log("Status Code: ", status);
    console.log("Here's a Joke for you: ", data.value);
  })
  .catch((error) => {
    const response = error.response; // The response from the server
    console.log("Status Code: ", response.status);
    // This code will run if something went wrong
    console.log("Something went wrong!", error);
  });
```

Instead of specifying the http method in the options, there are also methods defined on the axios object itself. For example for a get request this would look like this.

```js
axios.get("https://api.chucknorris.io/jokes/random", {
  /* options */
});
```

There's also `axios.post`, `axios.delete`, `axios.put` and `axios.patch`

If we are using axios in multiple contexts it's also possible to create an instance using `axios.create` where we set some configuration to be shared among multiple requests

```js
const axiosInstance = axios.create({
  baseUrl = "https://api.chucknorris.io/jokes/"
});

axiosInstance.get("random");

axiosInstance.get("search/linux");
```

### Promises

Axios is using a Javascript feature called promises.

Promises are a way to define asynchronous operations simpler and more scalable than using callbacks.

Remeber that up until, whenever we had to specify code to be run at a later point, we used a callback.
We passed a function, with the code we wanted to be run at a later point as an **argument** to the original function.

```js
setTimeout(() => {
  console.log("Log this after 3 seconds");
}, 3000);
```

Some functions also expect a callback which takes an error object, to handle errors which occur in an asynchronous operation.
Here's an example from the node file system library

```js
fs.writeFile("test.txt", "This is the content of the file", (error) => {
  if (error) {
    console.log("Something went wrong while writing the file...", error);
  } else {
    console.log("Success!!!");
  }
});
```

Promises turn this around.
Instead of using **arguments** to define actions to be carried out later we add Event Handlers on the **return value**.

Instead of returning undefined a function like setTimeout or fs.writeFile would return a Promise.

A Promise then gives us the opportunity to register code to be run at a later point.
You can think about it like installing an Event Listener.
The main event is called `then`, which will be triggered when the Promise gets successfully resolved, i.e. the asynchronous operation was successful and generated a result. For example we got back a response from an HTTP request to a server.

Another event we can register to is `catch` which will be triggered whenever an error occurs before the promise gets resolved.
The error itself will be passed to the handler.

The tricky part about promises is that they can be chained.
A call to the then or the catch method will return yet another promise on which another then handler or a catch handler can be registered.

The most typical scenario is to install multiple nested then handlers, which are finished by a catch handler, which will _catch_ any errors that might occur in the chain of asynchronous operations.

Here's a more verbose version of the axios example above, showcasing how the promises are getting created.

```js
// Start the operation, which will immediately return the promise object
const promise1 = axios.get("https://api.chucknorris.io/jokes/random");

// Install a then handler to be run if the server returns a response.
const promise2 = promise1.then((response) => {
  console.log("Success", response);
});

// Install a catch handler to be run if there is an error in either the original request or the then handler.
promise2.catch((error) => {
  console.log("Error", error);
});
```

## Video

- [Kata: Genetic Algorithm](https://us02web.zoom.us/rec/share/w9crbKmgqHpIeYXO-GHccYMhG6bXT6a81nIY__IJyU4omMZTdXFhM3xMV57NiWh6?startTime=1589187376000)
- [async & await Presentation](https://us02web.zoom.us/rec/share/_vdpNZPssT9LRK_X7F-PC6M6Md31T6a8gyMcqPpcnkn40Y2QU6K0dFACfLv2x4Xt?startTime=1588939297000)
- [async & await Practice](https://us02web.zoom.us/rec/share/w9crbKmgqHpIeYXO-GHccYMhG6bXT6a81nIY__IJyU4omMZTdXFhM3xMV57NiWh6?startTime=1589189561000)
- [async & await Solution](https://us02web.zoom.us/rec/share/w9crbKmgqHpIeYXO-GHccYMhG6bXT6a81nIY__IJyU4omMZTdXFhM3xMV57NiWh6?startTime=1589205587000)
- [Promise to async & await Transformation](https://us02web.zoom.us/rec/share/w9crbKmgqHpIeYXO-GHccYMhG6bXT6a81nIY__IJyU4omMZTdXFhM3xMV57NiWh6?startTime=1589206863000)

## Challenge

<https://github.com/gabrielheinrich/async-await-exercise/>

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

## Problem: Nesting

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

There's got to be a better way

### Solution 1: Promise.all

Takes in an array of promises and returns a promise which will resolve to an array of values

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

### Solution 2 : async await

New language feature, available in specifically marked async functions

```js
async function main() {
  // Async code
}

const main = async () => {
  // Async code
};
```

Inside an async function await can be used to wait on a promise and get access to the resolved value.

Reconsider this code

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

This can be rewritten like this

```js
async function printChuckNorrisJoke() {
  try {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(res.data.value);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```

If you return a value from an async function it will be wrapped in a promise automatically
This is true even if no await is happening inside the async function.

```js
async function tossCoin() {
  return Math.random() < 0.5;
}

tossCoin().then((heads) => console.log(heads ? "Heads" : "Tails"));
```

### Nesting Solution 1

```js
async function printThreeChuckNorrisJokes() {
  try {
    const joke1 = await axios.get("https://api.chucknorris.io/jokes/random");
    const joke2 = await axios.get("https://api.chucknorris.io/jokes/random");
    const joke3 = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(joke1.data.value);
    console.log(joke2.data.value);
    console.log(joke3.data.value);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```

### Nesting Solution 2

```js
async function printChuckNorrisJokes(count) {
  try {
    const jokes = [];

    for (let i = 0; i < count; ++i) {
      jokes.push(await axios.get("https://api.chucknorris.io/jokes/random"));
    }
    console.log(jokes.map((res) => res.data.value).join("\n"));
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}
```

## Exercise

Take the Insomnia Calls from the previous task and create Vue components that
call these API's and display their content.

## Advanced

Alternatively to axios, there are two standard ways of creating HTTP Requests.
Try both of them as alternatives to axios. You will surely encounter them in the
wild later on.
