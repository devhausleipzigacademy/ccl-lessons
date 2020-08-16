# Vuetification

**Starter Question** What's the difference between the Frontend and the Backend of a
Website?

## Frontend Frameworks

- Angular
- React
- Vue
- Svelte

### Features of Frontend Frameworks

- Reactivity: Data-Bindings
- Templating & Virtual DOM
- Components
- Single Page Applications: Routing

### Getting Started

#### Setting Up Vue

- To include the Vue Javascript Library in your project you can include this script tag in your head.

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

In a more professional context all library code would be bundled using a tool called webpack.
We'll learn more about this next week.

### Vue Instance & Reactivity: {{}}

Before vue can be used in your app, we have to create a vue instance using the `Vue` constructor

```js
const app = new Vue({ options });
```

#### Plugging into an element

Vue needs to know where you want it to render its output in the DOM.

To achieve this we can set the option `el` (short for element) and give it a css query selector.

```js
el: "#app";
```

In your html you should have a corresponding element with the id `app`

```html
<div id="app"><!-- Here Vue will render its output --></div>
```

#### Displaying data in the DOM

The Vue constructor expects another option called `data` which can contain an object of values

```js
data {
  countdown: 5000
}
```

If we want one of the data properties to appear in the html we can put the property inside double curly braces directly **inside the html**

```js
<div id="app">{{ countdown }}</div>
```

In fact we could have written a full javascript expression, for example

```none
{{ countdown + " ms" }}
{{ countdown > 0 ? countdown : "Great Job!"}}
```

#### Reactivity

If we now open the console we can reset the countdown and see the value in the html automatically change thanks to Vue's reactivity system.

Open the console and type this:

```js
app.countdown = 10000;
```

### Attribute Bindings: v-bind

The double curly braces only work inside the textContent of an html element.
If we want to connect to an html elements attribute like `src`, `href`, `id` we need to use a special vue directive called v-bind

Let's say we want to dynamically change the icon inside an img

```html
<img src="../img/icon-play.svg" />
```

First we add the iconUrl as one of our data properties

```js
data: {
  iconUrl: "../img/icon-play.svg";
}
```

Then we can add the v-bind directive to the `src` attribute to connect it to Vue

```html
<img v-bind:src="iconUrl" />
```

Because the v-bind directive is so frequently used, there's also a short-hand syntax using a single colon.

```html
<img :src="iconUrl" />
```

Now you can reset the iconUrl dynamically

```js
app.iconUrl = "../img/icon-rewind.svg";
```

### Conditional Rendering: v-if

Often we want individual html elements to only appear under specific conditions on the page.
Remember the slide in menu from the one pager or the message send screen from the company website.

Vue gives us an easy way to do this, without having to use classes which set the display property to none

You can add a v-if directive to an element to only have it rendered when the condition you set it to evaluates to true

```html
<p v-if="countdown < 3000">You are almost there</p>
```

It can also combine it with an v-else and also v-else-if to create more complex decision trees.

```html
<p v-if="countdown == 0">Done!!!</p>
<p v-else-if="countdown < 3000">You are almost there</p>
<p v-else>Keep going...</p>
```

v-if removes and adds the element from the DOM instead of using the display property.
Sometimes for performance reasons it might be necessary to go back to just toggling the display property.
Luckily there's also a way in vue to do this

```html
<p v-show="Math.round(countdown / 1000) % 60 == 0">Another minute done!</p>
```

### List Rendering: v-for

Often we want to create lists of similar html elements, which only differ in their content, but share the same structure.

With vue we can simply create an array as a data property and create an html for each array element using the v-for directive

Let's say we have a history property containing some entries

```js
data: {
  history: [
    {
      startedAt: 1586793269218
      task: "Learn about v-if"
    },
    {
      startedAt: 1586795721226
      task: "Learn about v-for"
    }
  ];
}
```

In our template we can now add v-for to the element we want to have created for each entry in the history

```html
<ul>
  <li v-for="entry in history" :key="entry.startedAt">{{entry.task}}</li>
</ul>
```

This will create something like this

```html
<ul>
  <li key="1586793269218">Learn about v-if</li>
  <li key="1586795721226">Learn about v-for</li>
</ul>
```

Notice that v-for is added to the item to be repeated, not its parent!
You can choose whichever identifier you like instead of `entry`.
Also notice that here it's `in`, not `of` as we have seen in javascript. Try to not confuse the two. Javascript: `of` Vue: `in`
It's recommended to bind the attribute key to a value that will be unique for each entry. Here we have used the startedAt timestamp.

Another possibility is to use the index. The syntax is slightly different

```html
<ul>
  <li v-for="(entry, index) in history" :key="index">{{entry.task}}</li>
</ul>
```

### Event Handling: v-on

If we want to listen for events like 'click' or 'submit' we can use the v-on directive in the html

```html
<button v-on:click="countdown = 0">Finish</button>
```

Like for v-bind there's also a short form using the @ sign

```html
<button @click="countdown = 0">Finish</button>
```

We can either write some javascript code directly in the v-on directive or we specify a method to be called when the event triggers.

To do this we first have to add another property called `methods` to the options we pass to the `Vue` constructor.

Inisde the function, this will be bound to the Vue instance, so we can use it to access all the properties and other methods.
Here's an example.

```js
methods: {
  finish: function(event) {
    this.countdown = 0;
  }
}
```

We can also use a slightly shorter syntax which looks like this

```js
methods: {
  finish() {
    this.countdown = 0;
  }
}
```

Be aware: The arrow function syntax wouldn't work here, because of some special rules. The this keyword wouldn't get correctly bound to the object on which the method will be called.

### Class & Style Bindings: :style and :class

When we want to dynamically change the styling of our app, we can bind the style and class attributes using v-bind.

```js
data {
  progressBarColor: "#ffe300"
}
```

```html
<div
  class="progress"
  :style="{
    backgroundColor: progressBarColor
    width: (countdown / durationInMs) + '%'
  }"
></div>
```

CSS properties are translated to camelCase. You could also use their original kebap-case names, but would then have to wrap them in quotes.

The class attribute can be either bound to a string or to an object, in which each key will become a class name for as long as it is set to true.
Here is an example using an object, where the class `redText` will be added to the element when the countdown is less than 5000.

```css
.redText {
  color: red;
}
```

```html
<div
  :class="{
  redText: countdown < 5000
}"
>
  {{ countdown }}
</div>
```

### Computed Properties: computed

Often the data properties are not ready to be displayed directly. Instead we want to transform them in some way before they get displayed.
For this we can use computed properties. They are similar to data properties in how we use them inside the template.
However in javascript they are not stored inside the data object but are computed using a function we can specify.

Computed properties are added in an extra key that looks similar to the `methods` key we have seen earlier.

Here is an example where we convert the countdown to a string displaying the remaining seconds.
Notice the this keyword which is used to get access to the data properties.

```js
computed: {
  countdownInSeconds() {
    return Math.round(this.countdown / 1000) + "s"
  }
}
```

```html
<p>Time remaining: {{countdownInSeconds}}</p>
```

### Forms: v-model

So far we have only seen reactivity work in one direction.
When we change a data property the HTML gets automatically updated. It reacts to the change.

When we work with forms however we also want to have a connection in the opposite direction.
We might have a data property that should automatically synchronize with the value the user is inserting into the form.
We call this a two-way data binding and we can creat such a binding by adding the v-model directive to an input element

```js
<input v-model="taskName" placeholder="What are you working on?" />
```

Now the `taskName` property will always stay in sync with the contents of the input form.

### Components

Components are reusable blocks of code, made out of an html template, javascript and optionally css.
They can be used to build up larger applications.
In fact any real world vue application will be made out of components with sub components.
Each component corresponds to a new custom html tag that we define using Vue.

To create a component, we have to register it using the `Vue.components` method

```js
Vue.components("timer", { options });
```

And when we want to create such a component in Vue, we simply add it as an html element to the vue template.

```html
<div id="app">
  <timer></timer>
</div>
```

We pass the name of the html tag we want to use to refer to this component as the first argument followed by an options object.
This options object can have almost an identical structure to the options object we passed in to the Vue instance constructor.

One distinction is that the data key, can't be an object, but must be a function returning an object.
That's because a component can be used multiple times throughout an application and each instance needs it's own independent version, which can be created on demand using the function we specified.

The html template of the component is also specified as a key.

```js
Vue.components("timer", {
  template: `<p>{{countdown}}</p>`
  data() {
    return {
      intervalHandle: null,
      countdown: 0,
    };
  },
});
```

It's possible to pass properties into a component and also to emit custom events from a component to be handled by a parent.

#### Props

Props are a way to pass data into a component. First the component has to specify which props it expects. This can be done as an array of strings in the `props` key in the options object.

```js
props: ["duration"];
```

Alternatively one can be more verbose and create an object and specify more settings like the type or a default value

```js
props: {
  duration: {
    type: Number,
    default: 60000 // 1 minute
  }
}
```

The parent component can now set this property using v-bind or as a regular html attribute

```js
<timer duration="10000"></timer>
<timer v-bind:duration="25 * 60 * 1000"></timer>
```

### Life Cycle Hooks

It's possible to specify code that should be run based on events in the lifecycle of a component or the application.
These have different names, e.g. `created`, `mounted`, `beforeDestroy` etc... and can be specified by adding them as a method to the options object.

Here's an example, printing "App started" to the console, when the app is created.

```js
const app = new Vue({
  created() {
    console.log("App started");
  },
});
```
