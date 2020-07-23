# Hello World

Let's take our first steps with the javascript programming language. You'll
learn how it became such a powerful language and what makes it in fact so
powerful. At the end you'll be running your first program while taking a live
autopsy of the interpreter.

## A short history of Javascript

![Javascript](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)

- Invented in the 95 by Brendan Eich in **10 days** at Netscape (Mozilla)
-
- Designed to embed programs into websites. Today used for everything.
- Has nothing to do with Java, name was just (bad) marketing
- Official name: **ECMAScript**
- New updated standards every year: Important Update: ES6, Latest ES11
- Boost in popularity and power over the last few years, mainly triggered by node.
- Today "hottest" technology, slowly becoming the new lingua franca of programming.

[Github Popluarity Comparison of different languages](https://githut.info/)
[ECMA Script Language Standard](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)

## Language Features

- Very perfromant for a dynamic language
- Simple core language implemented by Engine (e.g. V8 Engine in Google Chrome)
- Always executed within a runtime environment:
  - Browser: Web API providing functionality for web pages.
  - node: Functionality to interact with OS, writing servers and general purpose
    programming.
  - Electron: Framework to write Cross Platform desktop applications
  - deno: Improved version of node (released in 2020)
- Languages which compile to Javascript: TypeScript, Elm, ClojureScript, Dart,
  Scala, ...
- Can be used to write almost any application. Limitations for real time,
  performance critical and
  _"close to the metal"_ programming.

[Programming Language Benchmark
Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/which-programs-are-fastest.html)
[List of Javascript Engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

## Running Javascript

```js
console.log("Hello World");
```

### REPL Mode

**R**ead **E**valuate **P**rint **L**oop

Executes individual javascript snippets on the fly, very similar to the command
line. Used for quick debugging and experimentation. Very helpful for learning.

#### Browser

- Open any webpage in your browser and open the console in the developer tools
- At the bottom of the console you'll find a command prompt. You can type some
  javascript code and hit enter to execute it (within the context of the
  currently opened web page).

#### Node

- Run `node` from the terminal.
- Type a piece of Javascript code and run it.

### Script Mode

#### Browser

- Create a standard index.html file in the root of your project and open it with the Live Server extension in VS Code
- Create a index.js file and add a `<script>` tag to the end of the `<body>`

```html
<script src="index.js"></script>
```

- Add some javascript code to the `index.js` file.
- Whenever you reload the page the script will get executed.

#### Node (without npm)

- Create a file which ends with `.js`, e.g. `index.js` and pass it to the `node`
  command as an argument:

  ```bash
  node index.js
  ```

#### Node (with npm)

- Create a new local repository
- Initialize npm inside the repository by running `npm init -y` (-y: yes to all
  questions to skip the initialization wizard). This will generate a
  `package.json` file.
- Create an `index.js` file
- Edit the `package.json` file to add a start script for your program

```json
{
  ...
  "scripts": {
    "start": "node index.js"
  },
}
```

- Run `npm run start` or the shorthand `npm start`

### Example Code Snippets

In script mode you will have to wrap an expression like `new Date()` in
`console.log(new Date())` for it to be printed.

```js
// Works both in node and in the browser
console.log("Hello World");

// Variables
const a = 5;
const b = 3;
console.log(a + b);

// Booleans
true;
false;
!false;
!!false;
true && true;
true && false; // true and false
true || false; // true or false

// String
"Hello World".toUpperCase();
"Hello " + "!!!!";

// Date
new Date();
new Date().getYear();
new Date().getSeconds();
new Date().getMilliseconds();

// Math
Math.random();
Math.round(0.65);
Math.round(Math.random());
parseInt("1011", 2);

// Only Works in browser
alert("Hello World");
document.write("Hello");
document.title = "NEW TITLE!!!";
const name = prompt("What's your name");
console.log(name);
console.log(document.URL);

// Fancy stuff
Math.round(Math.random()) ? "Heads" : "Tails";

alert("Hello " + prompt("What's your name?"));

true && true && true && true;
true && true && false && true;

["A", "B", "C", "D"].reverse().join("-");
["B", "D", "C", "A"].sort();

parseInt("100", 7);
```

### Debugging with VS Code

- Open **Run and Debug** in VS Code and click add create a new configuration.
- Starting Debugger in VS Code: Click on Play button or <kbd>F5</kbd>
- Breakpoints: Mark points in the source code at which the debugger should
  wakeup and interrupt the program.
- Debug Views:
  - Call Stack: Point of the execution of the running program
  - Environment: Data stored in memory
  - Debug Console: Execute some javascript code in the active context.
- Debugger Functions:
  - Continue: run program normally until next breakpoint
  - Step Over: run until next line
  - Step Into: run minimal step, jumping through the substeps of the current line.
  - Step Out: Jump into the parent context.

## Check Questions

- What kind of applications can be written with Javascript? Which one's can't?
- What are different ways of running Javascript programs? How many can you name?
- What is a Javascript Engine? Can you name an example of a Javascript Engine?
- What is a Javascript Runtime? Why is it necessary? Which ones can you name?
- Is Javascript typically compiled or interpreted?

## Resources

[MDN: Mozilla Developer Network Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
[Free and excellent online book: Eloquent Javascript](https://eloquentjavascript.net/)

## Open Exercises

- Run some code snippets in the browser
- Write a script and use the VS Code debugger to step through the program.
