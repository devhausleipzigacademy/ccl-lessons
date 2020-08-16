# JS DOM API

Javascript **Document Object** Model Application Programming Interface

## Resources

[Official Explanation](https://developer.mozilla.org/en-US/docs/Glossary/DOM)

The DOM (Document Object Model) is an API that represents and interacts with any
HTML or XML document. The DOM is a document model loaded in the browser and
representing the document as a node tree, where each node represents part of the
document (e.g. an element, text string, or comment).

## `document`: Entry Point into the DOM

The binding `document` gives you access to the loaded document. It represents
the root node of the html tree.

## Getting access to nodes

```js
document;
// The whole document

document.body;
// The <body> element

document.getElementById("login-button");
// Search for element with given id e.g. <button id="login-button">

document.querySelector(".card p");
// Search using a CSS Selector. Will return first selected element only

document.querySelectorAll(".card p");
// Return all elements matching querySelector as a NodeList
```

## Manipulation Nodes

HTML

```html
<div id="app"></div>
```

Javascript

```js
const app = document.querySelector("#app");

app.textContent = "Hello";
// <div id="app">Hello</div>

app.innerHTML = "<h1>Hello</h1>";
// <div id="app"><h1>Hello</h1></div>

// Remove all children
app.innerHTML = "";
// <div id="app"></div>

app.setAttribute("lang", "en");
// <div id="app" lang="en"></div>

// Attributes starting with data- can be used for appliation specific
// user-defined new html attributes
app.dataset["my-attribute"] = "Some Custom Data";
// <div id="app" data-my-attribute="Some Custom Data">
```

Changing styles

```js
// Styling
app.style.backgroundColor = "#ff0000";
// <div id="app" style="background-color: #ff0000;" ...></div>

app.classList.add("dark-mode");
// <div id="app" class="dark-mode" ...></div>

app.classList.remove("dark-mode");
// <div id="app" class="" ...></div>

app.classList.toggle("dark-mode");
// <div id="app" class="dark-mode" ...></div>
app.classList.toggle("dark-mode");
// <div id="app" class="" ...></div>
```

## Handling Events

```js
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function (event) {
  console.log("Logging you in ...");
  console.log(event);
});

document.addEventListsner("keyup", (event) => {
  console.log("keyup Event happened with key: " + event.key);
});
```

Cleaning up Event Listeners

```js
const handleDoubleClick = (event) => {
  console.log("Double click");
};

document.addEventListsner("dblclick", handleDoubleClick);
// Listening to double clicks
document.removeEventListener("dblclick", handleDoubleClick);
// Stop listening to double clicks
```

## Creating new nodes

```js
const heading = document.createElement("h1");
heading.textContent = "Hello from Javascript";
//<h1>Hello from Javascript</h1>

// The heading is not yet visible, because it is not part of the document tree.
// Let's change that:
document.body.appendChild(heading);

// This method is more performant then resetting document.body.innerHTML,
// because it doesn't require parsing an HTML String
```
