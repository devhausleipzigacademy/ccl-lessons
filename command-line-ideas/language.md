# Speaking Javascript

[Code Snippets](https://codecampleipzig.netlify.app/lesson/markdown?url=https%3A%2F%2Fgabrielheinrich.github.io%2Fccl-lessons%2Fcommand-line-ideas%2Flanguage-snippets.md)

## Summary

- [0 - Comments]()
- [1 - Bindings]()
- [2 - Operators]()
  - [2.1 - Arithmetic]()
  - [2.2 - Comparison]()
  - [2.3 - Logical]()
  - [2.4 - Reassignment]()
  - [2.5 - Lookup]()
  - [2.6 - Additional]()
- [3 - Control Flow]()
  - [3.1 if else]()
  - [3.2 while]()
  - [3.3 for]()
  - [3.4 for of]()
  - [3.5 break & continue]()
- [4 - Functions]()
  - [4.1 Calling a function]()
  - [4.2 Creating a function]()

## 0 - Comments

Source code comments are used to document your code. They are purely used to
communicate with other developers (and yourself), while the Javascript
interpreter will simply ignore them, as if they wouldn't exist.

There are two different kinds: Line Comments which start with `//` and only last
until the end of the line and multi
line comments wich are enclosed in `/*` and `*/`

In Visual Studio Code there are keyboard shortcuts to comment and uncomment a
line of code:

- `Cmd+K Cmd+C` Comment Line
- `Cmd+K Cmd+U` Uncomment Line

(OnWindows replace `Cmd` with `Ctrl`)

### Examples

[Best Source Code Comments Thread and Stack
Overflow](https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered)

#### Todo

```js
// TODO: Add a password reset option
```

#### Documentation embedded in source code

```js
/**
 * Represents a book.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
  //...
}
```

## 1 - Bindings

```js
let degreeInCelsius = 20;
// Read: We create a new binding between the identifier degreeInCelsius
// and the number 20.
// or: We bind degreeInCelsius to the value 20
// or: We define degreeInCelsius as 20
// or: Let degreeInCelsius be 20

const degreeInCelsius = 20;
// Read: We create a new constant binding between ...
// or: We define the constant degreeInCelsius to be 20
```

### Old style bindings

Before the ES6 Standard introduced `let` and `const` to the language, the only
way to create bindings was by using the keyword `var`. This older way of creating bindings has some
weaknesses and is rarely used in modern code, but is still supported for backwards compatibility.

```js
var degreeInCelsius = 20;
```

### Rules for identifiers in Javascript

- Constructed from `A-Z`, `a-z`, `0-9`, `_` and `$`
- But may not start with a digit, i.e. `2ndName` is not a valid identifier
- Can not be a keyword, like `const let var function return break continue true false null undefined ...`
- Use camelCase by default
- Sometimes ALL_UPPERCASE is used for constants and PascalCase for constructors
  (functions which construct new objects)

## 2 - Operators

### 2.1 - Arithmetic

```js
1 + 1; // => 2
// Read: 1 plus 1

8 - 1; // => 7
// Read: 8 minus 1

10 * 2; // => 20
// Read: 10 times 2

10 / 3; // => 3.3333333333333335
// Read: Divide 10 by 3 (floating-point!)

10 % 3; // => 1
// Read: 10 modulo 3 (Remainder after integer division)

2 ** 10; // => 1024
// Read: 2 to the power of 10
```

#### String Concatentation and Interpolation

The `+` operator can also be used on strings to concatenate them.
An alternative approach to string concatenation is to use a string literal surrounded with backticks
(`\``) using a new javascript feature called string interpolation.

```js
const name = "Rick";
// + operator with strings
"Hello" + name + "!"; // "Hello Rick!"

// String interpolation
`Hello ${name}!`; // "Hello Rick!"

// Watch Out:
"1" + 1; // "11"
// When a number and a string get mixed, the string wins.
```

### 2.2 - Comparison

```js
name == "Rick";
// Read: name is equal to the string Rick

name != "Rick";
// Read: name is not equal to the string Rick

amount < 10;
// Read: amount is less than 10

amount <= 10;
// Read: amount is less than or equal to 10

amount > 10;
// Read: amount is greater than 10

amount >= 10;
// Read: amount is greater than or equal to 10
```

#### Strict equality

The normal comparison operator will convert values to a common
type before they are compared. This is sometimes helpful, for example `null == undefined` is true, but can also create weird behavior (`0 == []` is true)

The `===` and `!==` operator disallow this auto conversion before the conversion
is done.

```js
name === "Rick";
// Read: name is strictly equal to Rick

name !== "Rick";
// Read: name is strictly not equal to Rick
```

### 2.3 - Logical

#### And: `&&`

```js
a && b;
// Read: a and b

false && false; // => false
false && true; // => false
true && false; // => false
true && true; // => true
```

#### Or: `||`

```js
a || b;
// Read: a or b

false || false; // => false
false || true; // => true
true || false; // => true
true || true; // => true
```

### Not: `!`

```js
!a;
// Read: not a

!true; // => false
!false; // => true
```

### 2.4 - Reassignment

```js
x = 24;
// Read: We assign the value 24 to x.
// or: We set x to 24.
```

#### Compound reassignment

```js
x += 2;
// Read: We add 2 to x;
// Syntactic sugar for x = x + 2;

// For most operators there exists a compound version
x -= 2;
x *= 2;
x /= 2;
x %= 2;
x &&= true;
// ...
```

#### Increment & Decrement

```js
++i;
// Read: We increment i by 1
// Syntactic sugar for i = i + 1;

--i;
// Read: We decrement i by 1
// Syntactic sugar for i = i - 1;
```

There are also `i++` and `i--`, which can be used interchangeably with `++i` and
`--i`. The only difference is the value the expression evaluates to (either
before or after the in/decrement).

### 2.5 - Lookup Operator

```js
// Array
const fruits = ["apple", "banana", "orange"];

fruits[0]; // "apple"
// Read: fruits at index 0

fruits[1]; // "banana"
// Read: fruits at index 1

// Object
const player1 = {
  name: "Rick",
  score: 256,
};

player1["score"]; // 256
// Read: We lookup the key score in the object player1
// Or: The score of player1

player1.score; // 256
// Syntactic sugar for player1["score"]

// Deep nesting is very common
document.body.children.length;
// Read: document dot body dot children dot length
// Or: document body children length

// length is a property of arrays
fruits.length; // 3
```

### 2.6 - Other operators

```js
typeof a // returns the name of a as a string
>> // bit shift right
>>> // Unsigned bitshift right
<< // bit shift left
& // bitwise and
| // bitwise or
^ // bitwise xor
~ // bitwise negation
? : // Conditional operator
```

To learn more about these operators, visit:

[MDN Reference: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

## 3 - Control Flow

### 3.1 - if

```js
if (status == "pending") {
  sleep(1000);
}
// Read: if status equals pending, we call the sleep function and pass it the number 1000 as an argument
// or: if the status is pending, we wait for 1000 ms before we continue
```

### 3.2 - if else

```js
if (n % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
// Read: if n modulo 2 is 0, we log "even" to the console, else we log "odd".
// or: if n is an even number, we log "even" to the console, otherwise "odd"
```

### 3.3 - while

```js
let i = 0;
while (i < 100) {
  console.log(i);
  i += 1;
}
// Read: We check whether i is less than 100.
// If that is the case we continue by logging the value of i to the console
// Then we increment i and start over, by checking again, whether i is less than 100
// As soon as i is no longer smaller than 100 the loop is over and we continue with the next statement
```

### 3.4 - for

A for loop is just syntactic sugar for a while loop, where we create a binding
that we want to update after each run through the loop.
This loop is equivalent to the loop above.

```js
for (let i = 0; i < 100; i += 1) {
  console.log(i);
}
```

### 3.5 - for of

If we want to iterate over the individual elements of an array, we can use a for
of loop. In each iteration an identifier will be bound to the currently selected element of
the array

```js
for (const element of ["apple", "orange", "banana"]) {
  console.log(element);
}
// OUTPUT:
// apple
// orange
// banana
```

### 3.6 - break and continue

**Inside a loop** there are two special statements allowed to abort the loop or
skip the rest of the loop body.

```js
break;
// Read: We break out of the loop and continue with the next statement after the loop body

continue;
// Read: We immediately jump to the end of the loop body to continue with the next loop iteration.
```

### Other constructs

There are some more control flow constructs, which however are not as frequently
used:

- `switch`
- `do while`
- `for in`

## 4 - Functions

### 4.1 - Calling a Function: Call Operator `()`

The values we pass inside the parenthesis in a function call, are called
**arguments**

```js
alert("Hello");
// Read: We call the function alert with the string "Hello" as an argument.
// or: We call alert with the argument "Hello"
// or: We show an alert window with the message "Hello"

user.login();
// Read: We call the login method on user without any arguments
// or: We trigger a login for the user.

parseInt("101", 2);
// Read: We call the function parseInt and pass it the string "101" and the number 2 as arguments
// or: We parse the string "101" as a binary integer

console.log(user);
// Read: We call console log and pass in user as an argument
// or: We log the user to the console
```

### 4.2 - Creating a function

```js
const add = function (a, b) {
  return a + b;
};
// Read We bind add to a new function which has two parameters, called a and b.
// or: We define a new function called add with two parameters a and b
```

#### Parameters and Arguments

**Parameters**: The unbound identifiers specified in a function definition, which are
placeholders to be filled with actual values later when some will call the
function.
**Arguments**: The input values provided by someone who wants to call the function to
be passed into the function.

The parameters will be bound to the arguments inside the function body.

#### Return

Inside a function we can use the `return` keyword to finish the function
execution and return an output value to the caller.

```js
return 5;
// Read: We finish the function by returning the value 5
// or: We return 5 from the function
```

#### Declaration notation

Syntactic sugar for creating a binding for a new function.

```js
function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
}
// Read as above
```

#### Arrow functions

In ES6 a new shorter syntax for function literals was introduced using the `=>`
symbol

```js
const add = (a, b) => {
  return a + b;
};

// If the function body only contains a single return statement, you can also write:
const add = (a, b) => a + b;
```

#### Functions as Values

Functions can not only be used when creating a new binding, but can appear
wherever any other expression can appear

```js
let log = console.log;

if (noLogging) {
  log = () => {
    /* Do nothing */
  };
}
```

Very often functions are passed as arguments to other functions to be called
back later when the function is finished. These functions are called
**callback** functions.

```js
preheatOven(200, () => {
  bakeCake();
});
```

## To be continued

This is obviously not an exhaustive list of all language features of Javascript, but
enough to start writing real programs. As a heads up here is a list of important
things we are still
missing at this point:

- Modules
- Exceptions
- Promises
- Type Coercion
- Async Await
- Destructuring
- Constructors & Prototypes
- Closure
