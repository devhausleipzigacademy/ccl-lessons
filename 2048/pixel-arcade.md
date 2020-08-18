# Pixel Arcade

## Resources

[Github Repo](https://github.com/gabrielheinrich/pixel-arcade)

## Vue Goodies

### VS Code Extensions

- Vetur
- Vue VSCode Snippets

### Vue CLI

A command line tool for creating and managing vue projects

```bash
npm install -g @vue/cli
```

## Creating a production level Vue Project

```bash
vue create pixel-arcade
```

- Pick `Manually select features`
- Enable `Vuex` and `Router` and `Unit Testing` using the space bar
- Choose the version `2.x`
- Use the history mode
- Choose ESLint + Prettier Config for linting and formatting
- Choose Lint on Save
- Select Jest as the Testing Framework
- Choose "In dedicated config files" for the configuration setup
- Don't save this as a template

Open the project in vscode

```bash
code -r pixel-arcade
```

### npm scripts

Start the development server

```bash
npm run serve
```

Build the frontend for production. It will be generated in the /dist folder

```bash
npm build
```

## Anatomy of a vue repository

### Configuration Files

- babel.config.js
- .eslintrc.js
- .editorconfig
- .browserslistrc
- .gitignore
- jest.config.js
- package.json
- yarn.lock

### `/public`

Contains files that will be copied over into the dist folder
Most of the time this will be the `index.html` file and the `favicon.ico`.

### `/src/main.js`

The entry point into the vue application. Here the Vue Instance gets created and
configured.

### `/src/App.vue`

The main root component of your application in which all others are embedded

### `/src/components`

This folder contains the components of your project as `.vue` files. These can
be buttons, input boxes.

### `/src/views`

Just like the components folder this folder contains .vue files, however this
folder is meant for higher level components that correspond to a specifi route,
like Home.vue, About.vue, Profile.vue, etc...

### `/src/router`

This folder contains an index.js file in which all the routes of your Single
Page Application are defined and how they are mapped to components

### `/src/store`

In this file the store of your application is defined. The store is a local
database for your application in which the state is managed using transactions.

### `/src/assets`

Here you can put assets like images, your own font files or any other media /
data file you want to use in your project

### `/tests/unit`

Contains the unit tests for the individual components. Notice the `.spec.js` extension

## Vue Components

Every .vue file defines a component. It has the following structure.

Hint: Use the vbase-css snippet to generate the basic structure

```html
<template>
  <!-- Important: The template MUST HAVE EXACTLY ONE CHILD -->
  <div>
    <h1>Hangman</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        word: "",
        guesses: [],
      };
    },
    methods: {
      guess(letter) {
        this.guesses.push(letter);
      },
    },
  };
</script>

<style scoped>
  h1 {
    font-weight: bold;
  }
</style>
```

### Using Components

You have to register child components in the component configuration Object in
order to use them. Use the vcomponents code snippet

src/components/Login.vue

```html
<template>
  <div>
    <CustomButton text="Login"></CustomButton>
  </div>
</template>

<script>
  import CustomButton from "@/components/CustomButton.vue";

  export default {
    components {
      CustomButton: CustomButton,
      // Or using ES6 shorthand
      CustomButton
    }
  };
</script>
```

## Vue Router Basics

The Vue Router renders a component into the `<router-view>` element in `App.vue`
based on the current URL.

### Creating a new route

/src/router/index.js

```js
import Hangman from "../views/Hangman.vue";

// ...

const routes = [
  // ...
  {
    path: "/Hangman",
    name: "Hangman",
    component: Hangman,
  },
];
```

### Adding a link to the route

Note that inside a vue app you can not use regular `<a>` element to link to vue
routes.
Instead use `<router-link>`

```html
<router-link to="/hangman">Hangman</router-link>
<!-- Preferred Alternative: using v-bind and the name -->
<router-link :to="{name: 'Hangman'}">Hangman</router-link>
```

## Vuex Store Basics

The Vuex store is a state management system integrated into Vue.
It's globally shared between all components.

### Defining the initial state

src/store/index.js

```js
new Vuex.Store({
  state: {
    score: 0,
  },
});
```

### Accessing the state from a component

The state is accessible in a component under `this.$store.state`

/src/views/Profile.vue

```js
export default {
  computed: {
    score() {
      return this.$store.state.score;
    },
  },
};
```

### Mutations: Changing the state

The idea behind Vuex is that every state change is a transaction and can be
tracked. This means we can not change the state directly. Instead we define
mutation functions and commit them.

src/store/index.js

```js
export default {
  state: {
    score: 0,
  },
  mutations: {
    ADD_SCORE(state, pointsToAdd) {
      state.score += pointsToAdd;
    },
  },
};
```

#### Commiting a Mutation

/src/component/Login.vue

```js
export default {
  methods: {
    handleWin() {
      this.$store.commit("ADD_SCORE", 10);
    },
  },
};
```

### Actions: Encapsulating State Logic

It's good practice to attach the logic that is required to decide which mutation
has to be commited also to the store. This keeps the
components lean and simple and makes logic reusable throughout the app. These
functions are called **actions** and will be dispatched from components.
Typical actions are: login, register, logout, fetchUserData, etc...

```js
export default {
  state: {
    score: 0
  },
  mutations: {
    ADD_SCORE(state, pointsToAdd) {
      state.score += pointsToAdd;
    },
  },
  action: {
    gameWon(context, result) {
      if (context.state.score >= 999) {
        throw new Error("You reached the maximum score");
      }
      context.commit("ADD_SCORE", result.points)
    }
    // Or using destructuring of the context object
    gameWon({state, commit}, result) {
      if (state.score >= 999) {
        throw new Error("You reached the maximum score");
      }
      commit("ADD_SCORE", result.points)
    }
  }
};
```

#### Dispatching an action

```js
export default {
  methods: {
    methods: {
      handleWin() {
        this.$store.dispatch("gameWon", {
          game: "Hangman",
          points: 10,
        });
      },
    },
  },
};
```

## Bonus: Persisting State in the Browser (Cookies)

```js
// store a value behind a key
localStorage.setItem("score", 512);

// load
const scoreAsString = localStorage.getItem("score");

if (score != null) {
  const score = parseInt(scoreAsString);
  console.log(`You already have ${score} points`);
}

// remove
localStorage.removeItem("score");

// Using JSON.stringify and JSON.parse
localStorage.setItem("state", JSON.stringify(state));
const retrievedState = JSON.parse(localStorage.getItem("state"));
```
