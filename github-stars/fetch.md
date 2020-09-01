# Fetch: Awaiting Promises

### Calling APIs with Javascript

## Resources

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Async
Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

[Axios](https://github.com/axios/axios)

## fetch Requests

### Making a fetch request

```js
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    // parse response as json
    return response.json();
  })
  .then((data) => {
    // data is the response as a js object
    console.log(data);
  })
  .catch((err) => {
    // either the fetch or the parsing went wrong
    console.error(err);
  });
```

### Request Options

```js
fetch("https://myapp.com/api/todos", {
  method: "post",
  body: JSON.stringify({
    title: "Learn about axios",
    completed: false,
  }),

  headers: {
    Accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  },
});
```

### Response Options

```js
fetch("/data.json").then((res) => {
  res.text(); // response body (=> Promise)
  res.json(); // parse via JSON (=> Promise)
  res.status; //=> 200
  res.statusText; //=> 'OK'
  res.redirected; //=> false
  res.ok; //=> true
  res.url; //=> 'http://site.com/data.json'
  res.type; //=> 'basic'
  //   ('cors' 'default' 'error'
  //    'opaque' 'opaqueredirect')

  res.headers.get("Content-Type");
});
```

## Promises

Promises are javascript objects that symbolize asynchronous operations.
During an asynchronous operation one of two events can happen:

- Success: The promise gets resolved with a value
- Error: The promise gets rejected with an error object

For both of these events you can add a callback to be executed when the event
takes place.

```js
const promise = fetch("/data.json");

// Add an event listener for the resolved case
promise.then((result) => {
  console.log("The promise resolved and returned the value: " + result);
}).catch((error) => {
  console.error(
    "The promise got rejected and this error was returned: " + error
  );
}
```

**`.then` returns another promise**
It will resolve with the return value of
the _then handler_ or be rejected if an error gets thrown.

It's important that the `.catch` is **chained** after the `.then`. This way it will
also be
called when something goes wrong in the _then-handler_.

## Async Await - Syntactic sugar for promises

Promise Version

```js
function printJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
  .then(response) {
    return response.json()
  }
  .then(data) {
    console.log("Wanna hear a joke? " + data.value)
  }
  .catch(error) {
    console.error("Something went wrong: " + error);
  }
}
```

Async Version

```js
async function printJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log("Wanna hear a joke? " + data.value);
  } catch (error) {
    console.error("Something went wrong: " + error);
  }
}
```

### !! An async function always returns a promise !!

## Vue/Vanilla Integration

```vue
<template>
  <div>{{ joke }}</div>
</template>
<script>
export default {
  data() {
    return {
      joke: "",
    };
  },
  async created() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        this.joke = data.value;
      });
  },
};
</script>
```

Wait until response arrives before route is loaded

```vue
<template>
  <div>{{ joke }}</div>
</template>
<script>
export default {
  data() {
    return {
      joke: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        next((vm) => {
          vm.joke = data.value;
        });
      });
  },
};
</script>
```

## Exercise

Create a Vue App with a route for each of the Insomnia requests you did before. In each route, make an API request when
the component gets created and then display the returned data on the page once
it has arrived. Be creative about how you display the data.

Extra: Transform all requests from regular Promises into the async await style.

Extra: Check out the [Axios](https://github.com/axios/axios)
library and try to use it instead of fetch.

Advanced: Create a GitHub search.
Advanced Advanced: Try implementing instant results while the
user is typing. Research debouncing to not create too many requests at once.

## Extra

### Creating your own promises

```js
new Promise((resolve, reject) => {
  doStuff(() => {
    if (success) {
      resolve("good");
    } else {
      reject(new Error("oops"));
    }
  });
});
```
