# The six fundamental challenges of machine code

The machine language a CPU
understands is optimized for fast execution, but is far from being convenient to
read and write for a human. In fact the challenges of writing machine code are so severe that
writing large programs directly in machine code is an almost impossible endeavour.

Programming languages have been designed to solve this problem and to help programmers deal with the fundamental
challenges of machine code.

## 1 - Bit Encoding

**How can we automatically translate the information we care about into bits and bytes?**

### Solution: Values & Types

#### Values

We borrow the idea of discrete values from mathematics. Values are
abstract entities, that can be clearly distinguished from each other.
Every programming language defines its own set of values, which we can call the
**value universe** of the programming language. The compiler/interpreter of the
programming language is capable of translating a **literal** representation of
a value written in source code into a corresponding byte pattern and will do
this automatically for us.

#### Types

The value universe itself is divided into non overlapping subsets, which we call
**types**. Every **type** is a set of values. The values of a type all share
some very fundamental
characteristics, e.g. they are numbers or they are strings. There are those simple atomic types, like **Number**, **String** or
**Boolean** but also more complex types like **Array** or **Object**, where
the values of those types are
themselves composed of other values.

Most languages also support values, that represent some executable program code
written in that language. These values are called **Functions** and their
existence allows very creative ways of composing programs.

Many languages also support user-defined types, which allow the programmer to
expand the value universe of the language.

### Examples

#### Numbers

In Javascript numbers are encoded using a 64-bit floating point format, however
most Javascript engines optimize small integers to be represented as 32 bit
integers.

```
// Integers
22
-42
// Floating Point Numbers
1.234
4.2e9
// Special numbers
Infinity
NaN // Not a number, result of illegal operation, e.g. division by zero.
```

#### Boolean

```
true // standard encoding 0x01
false // 0x00
```

#### String

Represented as UTF-16 in Javascript, i.e. by default every character takes up 16
bits. Javascript allows `"`, `'` or `\`` as delimiters for string literals.

```
"Hello World"
'Hello World'
`Hello World`
```

### Arrays

Arrays are the most important data structure in any programming language. They
model lists of values of arbitrary length. Under the hood they are most often
stored as a contiguous block of memory.

```
[1, 2, 3]
["A", "B", "C"]
[1, "A", true]
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
[] // empty list
```

### Objects

Objects represent a collection of key value pairs. Imagine them as a table with two columns, the first
one for the keys and the second one for the coressponding value. In other
languages they are also often called **maps**, **records** or **dictionaries**.
There are many possible implementations with different performance
characteristics. The simplest one is an array of pairs.

```
{
  firstName: "Rick",
  lastName: "Sanchez",
  age: 70,
  occupation: "Scientist",
  children: ["Beth Smith", "Space Beth"]
}
```

## 2 - Memory Management

**How can we keep track of all the values stored in memory, without having to
deal with explicit memory addresses?**

### Solution: Bindings & Scopes

Instead of accessing positions in memory via memory addresses (i.e. fairly large
integers), programming
languages allow us to use human-readable
**identifiers**. When we want to store some value in memory, we can create a new
**binding** which associates an **identifier** with a **memory address**. The
compiler/interpreter will keep track of all active bindings and replace the
identifier with the corresponding memory address whenever possible.
The part of a program in which a binding is active is called the **scope** of
the binding.

More often a binding is actually called **variable**. The two terms can be used
interchangeably, however the word binding is a more accurate description of the
underlying mechanic.

#### Creating a binding: Definition

```js
let name = "Rick Sanchez";
```

#### Using a binding

Every identifier that is _in scope_ can be used throughout the program and the compiler/interpreter
will automatically insert the value it is bound to, by reading it from
the corresponding memory address.

```js
console.log("Greetings, " + name + "!");
// OUTPUT: Greetings Rick Sanchez!
```

#### Changing a binding: Reassignment

It is possible to change the value that is bound to an identifier. This process
is called **reassignment** and the syntax looks very similar to a
**definition**. The only difference is the missing **let** at the beginning of
the statement.

```js
name = "Pickle Rick";
```

#### Constant bindings

The majority of all bindings will never have to be reassigned and its good
practice to only use this feature
if its absolutely necessary for the implementation of the program. If a
binding never changes it's preferably to define it with the keyword `const`
instead of `let`. The compiler will enforce that bindings created with `const`
will never be reassigned.

```js
const name = "Rick Sanchez";
```

## 3 - Instructions

**How can we specify complex computations without having to deal with the
verbosity of machine instructions?**

The machine instructions used to implement bindings are the **read** and
**write** instructions. However a CPU offers many more instructions, e.g. for
arithmetic, logical operations, comparisons. In machine code there can only be
one instruction per line and each has to define a new binding to store its
result.

**Pseudo Machine Code**

```js
const celsius = 20;
const a = multiply celsius 9;
const b = divide a 5;
const fahrenheit = add a b;
```

### Solution: Operators & Expressions

Fortunately programming languages allow us to write more readable and less verbose code.
Instead of exposing the machine instructions directly to the
programmer, a programming language defines a set of **operators**, like `+`, `-`, `*`, `&&`,
etc... which can be used to construct
**expressions**.

A compiler is then able to generate the necessary machine
instructions to evaluate the expression to yield a result value and will replace
the expression with this result value.

This mechanism gives expressions their real power. Expressions can be
nested inside each other to create
arbitrarily complex expressions, which results in much less noisy code.

Compare this javascript code to the pseudo machine code from above.

```js
const celsius = 20;
const fahrenheit = (celsius * 9) / 5 + 32;
```

The set of operators in programming languages goes beyond simple arithmetic.
There are two operators that are especially noteworthy:

- The call operator `()` invokes a function, i.e. another section of source
  code. It can additionally pass in some input values to the called function and
  can return an output value after the functions execution is finished.

  ```js
  console.log("Hello World");
  Math.max(3, 5, 7, 1); // -> 7
  ```

- The lookup operator `[]` reads a value
  from an array or an object stored at a specific index (in the case of an array) or associated with a
  certain key (in the case of an object). The lookup operator can also be used on
  the left hand side of an assignment to write a new value into an array or
  object. Here an example, which builds up an object in which colors for a theme
  are stored.

  ```js
  const theme = {};
  theme["primary"] = "#ff3333";
  theme["secondary"] = "#33ffff";
  theme["background"] = "#fdfdfe";
  ```

## 4 - Jumps

**How can we write programs that don't just execute from top to bottom, but without
having to deal with addresses in source code?**

There's a type of instruction that can neither be hidden behind the binding mechanism
(like read and write instructions) nor be mapped to an operator. Jump
instructions can make the CPU jump and continue execution from a different line
of code. Jump instructions are fundamentally necessary to write dynamic
programs. Without them every program would just be executed from top to bottom.
However writing jump instructions that specify the line of code to jump to allow programmers to write spaghetti
code, which is bearly readable.

### Solution: **Conditionals & Loops**

Instead of using jump instructions directly it's possible to come up with a
small set
of common control flow scenarios and capture them as special language
constructs with a custom syntax.

#### Sequential Execution

This is the default. Execution flows from line to line, just like reading a
text. No lines are skipped.

```js
const cake = makeCake();
const frosting = makeFrosting();
const carrotCake = combine(cake, frosting);
```

#### Conditionals: if else

Here a block of code is executed, if a given expression evaluates to `true`.
Otherwise execution will jump to a different block marked with the keyword
`else`

```js
if (likes(person, "carrot cake")) {
  bake("carrot cake");
} else {
  ask(person, "Really???");
}
```

The else block is actually optional. Here's an example

```js
if (numDishesInSink >= 4) {
  doTheDishes();
}

haveFun();
```

And the if else structure can be chained.

```js
if (likes(person, "carrot cake")) {
  bake("carrot cake");
} else if (likes(person, "cheese cake")) {
  bake("cheese cake");
} else if (likes(person, "blueberry muffins")) {
  bake("blueberry muffins");
} else {
  showWayTo(person, door);
}
```

or nested like this:

```js
if (likes(person, "carrot cake")) {
  const cake = bake("carrot cake");
  if (likes(myself, person)) {
    give(cake, person);
  } else {
    eatBeforeEyesOf(cake, person);
  }
}
```

### Loops: while and for

Conditionals are perfect to jump ahead in the and skip
certain blocks. More interesting however are jump instructions that jump
backwards, creating a loop and a second conditional jump that will make the
execution break out of
the loop.

```js
console.log("Here are the numbers from 1 to 100:");

let counter = 1;

while (counter <= 100) {
  console.log(counter);
  counter = counter + 1;
} // Jump back to beginning of loop

console.log("Done");
```

Since the scenario of having a counter that is incremented in every run through
the loop, there's the keyword `for` that's frequently used as a shorthand
replacement. The syntax looks like this and is equivalent to the `while` loop from
above

```js
for (let counter = 1; counter <= 1; counter = counter + 1) {
  console.log(counter);
}
```

**Loops are at the heart of every program**

## 5 - Structuring large programs

**How can we divide a large program into small components?**

### Solution: **Functions & Modules**

As programs grow, writing all source code in one file from top to bottom,
becomes unfeasible. Instead we want to create small individual comonents and
combine them like lego pieces to build our software. These lego pieces are
called **functions**, each representing a piece of source code, which takes
input arguments and produces an output value.
**Functions** can then be setup as bindings and grouped into **Modules**, which
allow the source code of a program to be split into multiple files.

## 6 Multi-Tasking

**How can we write programs that perfrom mutliple tasks at the same time?**

There are many solutions to that problem, each with its own advantages and draw
backs. Javascript has a relatively simple but still powerful way of making
multi-tasking possible.

### Solution: **Event Loop**

Javascript is fundamentally **single-threaded** which means at every point in
time only one line of code is getting executed.
Still multiple processes can be maintained by that single thread of execution,
as every task that takes a long time, can be pushed to the runtime environment,
which frees the thread again to take up another completely unrelated task while
waiting for the initial task to be finished. Following this scheme javascript
appears to be doing multiple things in parallel, while in reality it is only
switching very quickly between them.
