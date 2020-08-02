# Command Line Ideas

[Inspiration: GitHub IonicaBizau/idea](https://github.com/IonicaBizau/idea)

## Features

- `idea --help`: Show command line usage manual
- `idea`: List all stored ideas
- `idea create 'Something brilliant'`: Store a new idea
- `idea remove 0`: Remove idea with index 0

## Important Functions

### Reading command line arguments

```js
process.argv[0]; // path to node executable
process.argv[1]; // path of currently running script
process.argv[2]; // first user argument
```

### Parse JSON: String -> Object

```js
const json = "{'title': 'A brilliant idea'}";

const data = JSON.parse(json);
data.title; // 'A brilliant idea'
```

### Stringify JSON: Object -> String

```js
const data = { title: "A brilliant idea" };

const json = JSON.stringify(data);
json; // "{'title': 'A brilliant idea'}"
```

### Reading a file

```js
const fs = require("fs"); // import node file system library

const fileContent = fs.readFileSync("./example.txt");
```

### Writing a file

```js
const fs = require("fs"); // import node file system library

const fileContent = "Hello World!";

fs.writeFileSync("./example.txt", fileContent);
```

### Delete file

```js
fs.unlinkSync("./example.txt");
```

## Software Development Methodology

[Slides](https://reveal-viewer.netlify.app/?md=https://raw.githubusercontent.com/gabrielheinrich/ccl-lessons/master/command-line-ideas/methodology.md)

1. Start with a Marketing Poster
2. Create Example Data
3. Analyse the interactions
4. Draw the UI
5. Be an architect
6. Create a comfortable development setup
7. Build a skeleton & establish connections
8. Deploy ASAP
9. Build a detailed fake UI
10. Pick one part and finish it, then repeat
11. Do refactoring sessions
12. Prepare for release

## Refactoring

### Modules

In node every .js file is a module. In order to split your code into mutliple
files you have to specify which values you want to export from a file. Then you
can import those values in another file using the `require` function

#### Exporting bindings from a file

_arithmetic.js_

```js
const add = (a, b) => a + b;

module.exports = {
  add: add,
  // Also possible:
  subtract: (a, b) => a - b,
};
```

#### Importing a module

_index.js_

```js
// Arithmetic will be bound to value of module.exports
const Arithmetic = require("./arithmetic.js");

console.log(Arithmetic.add(1, 2));
```

Or using **Object Destructuring**

```js
const { add, subtract } = require("./arithmetic.js");

console.log(add(1, 2));
console.log(subtract(2, 1));
```

### Exceptions

#### Throwing an exception: throw

```js
throw new Error("Something went terribly wrong");
```

#### Handling an exception: try catch

```js
try {
  // If any of these function calls throws an exception
  // we jump into the catch block
  thisMightFail();
  orThis();
} catch (e) {
  // if we catch an exception, its value will be bound to e
  console.log(e);
}
```

### Class

```js
class Point2d {
  // The constructor can be used to create new instances
  // of a class. It is called like this:
  // const p = new Point2d(0, 0);
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this is a special binding
    // It is automatically bound to the newly created object
    // We use it to give some state to our objects.
  }

  // Method definition
  print() {
    // Use this.something to access the stored properties
    console.log(`(${this.x}, ${this.y})`);
  }
}

const point = new Point2d(3, 7);
point.print();
```

### Tests

[Jest Unit Testing Framework](https://jestjs.io)

#### Adding jest to an npm project

```bash
npm install -D jest
```

#### Creating a test

_point.test.js_

```js
const Point2d = require("point.js");

// Define a Test Suite
describe("Point2d", () => {

  // Add a Test case
  test("Constructor should setup properties x and y", () => {
    const point = new Point2d(1, 2);
    // Test if your assertions are met
    expect(point.x).toBe(1);
    expect(point.y).toBe(2)
  })
}
```
