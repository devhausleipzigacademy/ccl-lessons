# Vuetification

**Starter Question** What's the difference between the Frontend and the Backend of a
Website?

## Resources

[Vue Cheatsheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)

[Vue Documentation](https://vuejs.org/v2/guide/)

## Frontend Frameworks

- Angular
- React
- Vue
- Svelte

### Features of Frontend Frameworks

#### Reactivity: Data-Bindings

The DOM Tree gets automatically updated when the state of some javascript
variables changes.

#### Templating & Virtual DOM

Instead of creating elements programatically, a template syntax almost
indistinguishable to html is used.

#### Components

You can create new custom html tags like `<home>`, `<menu>` etc...

#### Single Page Applications: Routing

Instead of requesting individual pages from the server, Javascript is used
to update the content of the page if you browse through the sub pages of a website.

## Importing Vue

Include the javascript library in the `<head>` of your html document

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

In a production context all library code would be bundled using a tool called
webpack.

## `new Vue`: Initializing the Vue Instance

Before vue can be used in your app, we have to create a vue instance using the
`Vue` constructor.

```js
const app = new Vue({
  el: "#app",
});
```

### Plugging into an element

Vue needs to know where you want it to render its output in the DOM.

To achieve this we can set the option `el` (short for element) and give it a css query selector.

```js
el: "#app";
```

In your html you should have a corresponding element with the id `app`

```html
<div id="app"><!-- Here Vue will render its output --></div>
```

## `data` and `{{}}`: Displaying Data

The Vue constructor expects another option called `data` which can contain an object of values

```js
new Vue({
  /* ... */
  data {
    word: "Vuetification",
    maxNumWrongGuesses: 7,
    correctGuesses: [],
    wrongGuesses: [],
  }
})
```

If we want one of the data properties to appear in the html we can put the property inside double curly braces directly **inside the html**

```html
<div id="app">{{ word }}</div>
```

In fact we could have written a full javascript expression, for example

Vue

```html
<div id="hangman">{{wrongGuesses.length}} / {{maxNumWrongGuesses}}</div>
```

Vanilla

```js
document.getElementById(
  "hangman"
).textContent = `${wrongGuesses.length} / ${maxNumWrongGuesses}`;
```

**Note**: The Vue version will automatically keep HTML and JS in sync, while
you'll have to execute the Vanilla snippet after every change to wrongGuesses.

## `v-on` and `methods`: Event Listeners and Functions

Every component as well as the vue instance can have methods. You define them by
adding a method key that looks like this

```js
new Vue({
  /* ... */
  methods: {
    guess(letter) {
      if (this.word.toUpperCase().includes(letter)) {
        this.correctGuesses.push(letter);
      } else {
        this.wrongGuesses.push(letter);
      }
    },
  },
});
```

**Note** that you have to use the `this` keyword to refer to the Vue Component
to access it's data properties (or other methods, or anything else
related to the component)

You can now connect these methods to event listeners by adding a special `v-on`
attribute in the template. It takes the name of an event, e.g. `v-on:click`
`v-on:keyup` and is followed by some javascript

Vue

```html
<button v-on:click="guess('A')">A</button>
<!-- Short form using @ -->
<button @click="guess('A')">A</button>
<!-- Even shorter if no arguments are needed -->
<button @click="startGame">Try again</button>
```

Vanilla

```js
document.getElementById("start-button", () => {
  startGame();
});
```

## `computed`: Transforming data on the fly

Computed properties are not stored statically like data properties, but are getting recomputed on
the fly whenever a data property changes. They are defined using functions

```js
new Vue({
  /* ... */
  computed: {
    revealedWord() {
      return this.word
        .split("")
        .map((letter) =>
          this.correctGuesses.includes(letter.toUpperCase()) ? letter : "_"
        )
        .join("");
    },
  },
});
```

In the template they can be used just like regular properties

```html
<div>{{revealedWord}}</div>
```

## `v-if`: Conditional rendering

Often we want individual html elements to only appear under specific conditions on the page.
Remember the slide in menu from the one pager or the message send screen from the company website.

Vue gives us an easy way to do this, without having to use classes which set the display property to none

You can add a v-if directive to an element to only have it rendered when the condition you set it to evaluates to true

```html
<div v-if="wrongGuesses.length >= maxNumWrongGuesses">You lost</div>
```

It can also combine it with an v-else and also v-else-if to create more complex decision trees.

```html
<div v-if="wrongGuesses.length >= maxNumWrongGuesses">You Lost!</div>
<div v-else-if="revealedWord == word">You Won!</div>
<div v-else>{{revealedWord}}</div>
```

## `v-for`: List rendering

Often we want to create lists of similar html elements, which only differ in their content, but share the same structure.

With vue we can simply create an array as a data property and create an html for each array element using the v-for directive

```js
data: {
  alphabet: ["A", "B", "C", "D", "E" /* ... */];
}
```

In our template we can now add v-for to the element we want to have created for each entry in the history

```html
<button v-for="letter in alphabet" :key="letter">{{letter}}</button>
```

This will create something like this

```html
<button>A</button>
<button>B</button>
<button>C</button>
<button>D</button>
<!-- ... -->
```

Notice that v-for is added to the item to be repeated, not its parent!
You can choose whichever identifier you like instead of `letter`.
Also notice that here it's `in`, not `of` as we have seen in javascript. Try to not confuse the two. Javascript: `of` Vue: `in`
It's recommended to bind the attribute key to a value that will be unique for
each entry. Here we can just use the individual letter.

Another possibility is to use the index. The syntax is slightly different

```html
<button v-for="(letter, index) in alphabet" :key="index">{{letter}}</button>
```

## Life Cycle Hooks

It's possible to specify code that should be run based on events in the lifecycle of a component or the application.
These have different names, e.g. `created`, `mounted`, `beforeDestroy` etc... and can be specified by adding them as a method to the options object.

Here's an example, printing "App started" to the console, when the app is created.

```js
const app = new Vue({
  created() {
    console.log("App started");
    startGame();
  },
});
```
