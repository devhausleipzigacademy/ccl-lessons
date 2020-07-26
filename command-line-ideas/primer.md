# The six fundamental challenges of machine code

The machine language a CPU
understands is optimized for fast execution, but is far from being convenient to
read and write for a human.

Programming languages have been designed to solve this problem and to help programmers deal with the fundamental
challenges of machine code.

## 1 - Bit Encoding

**How can we automatically translate the information we care about into bits and bytes?**

Computers work with bits and bytes. So whatever information we care about we
first have to translate into bits and bytes. Doing this translation by hand all
the time would be tedious. Instead there's a better solution

### Solution: Values & Types

We borrow the idea of discrete values from mathematics. Values are
abstract entities, that can be clearly distinguished from each other.
Every programming language defines its own set of values, which we can call the
**value universe** of the programming language. The compiler/interpreter of the
programming language is capable of translating a **literal** representation of
a value written in source code into a corresponding byte pattern and will do
this automatically for us.

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

```
// Numbers
42
1.234
// Boolean
true
false
// String
"Hello World"
// Arrays
["A", "B", "C"]
// Objects
{
  name: "Rick Sanchez",
  age: 70,
  occupation: "Scientist",
}
// Functions
(name) => {
  console.log ("Hello " + name);
}
```

### Quiz

- What is a type in computer programming? Can you name some examples.
- What is the fundamental property of values? Why is the concept useful in programming?
- Can there be multiple different representations of the same value as bits? If
  so, can you construct an example?
- Can you imagine how an array could be laid out in memory? How about an object?
  Or a function?
- For some types, each value of that type fits within a fixed number of bytes,
  while for other types the number of bytes required to store a value is
  dependent on the actual value. Can you give an example for each of these
  cases.
- Some programming languages allow the user to define new types and thereby
  expand the value universe. Can you think
  of scenarios where this could be used? Can you think of downsides of this
  language feature?

## 2 - Memory Management

**How can we keep track of all the values stored in memory, without having to
-deal with explicit memory addresses?**

The main memory of a computer is just a gigantic grid of bytes. Each byte has an
address and the CPU can read and write bytes at specific addresses using write
and read instructions.
However an address is nothing but a lage integer (the index of the byte in this grid), so keeping track of the values
stored in memory requires keeping track of a large list of these integer numbers.
Luckily programming languages shield the programmer from this process, by using
human readable **identifiers** and creating **bindings** between these
identifiers and a location in memory.

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

### Quiz

- What is the differenbe between **Creating a binding** and **Defining a variable**?
- What happens with a value bound to an identifier after the binding goes out of
  scope?
- What happens when we **reassign** a binding?

## 3 - Instructions

**How can we specify complex computations without having to deal with the
verbosity of machine instructions?**

The machine instructions used to implement bindings are the **read** and
**write** instructions. However a CPU offers many more instructions, e.g. for
arithmetic, logical operations, comparisons. However in machine code there can only be
one instruction per line and each has to define a new binding to store the
output of the instuction.

**Pseudo Machine Code**

```js
const celsius = 20;
const a = multiply celsius 9;
const b = divide a 5;
const fahrenheit = add b 32;
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

Compare this javascript code to the pseudo machine code from above. Notice that
the meaningless bindings `a` and `b` are gone.

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

### Quiz

- Draw the abstract syntax tree of these expressions
  ```
  celsius * 9 / 5 + 32
  (true && false) || (false && true)
  1 == true ? a : b
  alert("Hello " + name)
  !!true
  ```
- A reassignment is actually an expression, i.e. it evaluates to a value. The
  operator is the `=`. Use a REPL to find out what values a reassignment
  expression evaluates to.
- There's a special operator `%`, which operates on numbers. Try finding out
  what it does. If you get stuck, try evaluating expressions:
  ```
  1 % 3
  2 % 3
  3 % 3
  4 % 3
  ...
  ```

## 4 - Jumps

**How can we write programs that don't just execute from top to bottom, but without
having to deal with addresses of specific parts of code?**

By default a CPU will execute instructions from top to bottom, one after the
other. If this kind of sequential execution was the only way a CPU could work,
it would be impossible to implement interesting programs. That's why jump
instructions have been invented. Jump
instructions can make the CPU jump and continue execution from a different line
of code. To do so the address of the machine code instruction to jump to must be
specified. Doing this explicitly is not only tedious, but also gives us too much
flexibility to write actually bad and untraceable code.

### Solution: **Conditionals & Loops**

Instead of using jump instructions directly it's possible to come up with a
small set
of common control flow scenarios and capture them as special language
constructs with a custom syntax. There are three main scenarios which can be
combined to create almost any control flow one could need.

#### 1. if

This construct is made out of an expression and a block of statements. If the
expression evaluates to true the code block will be executed, otherwise it will
be skipped.

```js
if (numDishesInSink >= 4) {
  doTheDishes();
}

haveFun();
```

#### 2. if else

An if else statement represents a choice. A fork in the road.
This construct is made out of an expression and two code blocks (also called branches). If the
expression evaluates to true the first block will be executed. If not the second
block will be executed instead. In either case execution will continue
afterwards with the first statement after the if else, i.e. the fork in the road
is joined again.

```js
if (likes(person, "carrot cake")) {
  bake("carrot cake");
} else {
  ask(person, "Really???");
}
```

#### 3. while loop

Both if and if else are implemented with jump instructions that jump ahead in the code and skip a
section. It's however also possible to jump backwards, which then creates an
infinite loop. This is only rarely useful, which is why another conditional jump
is added that at some point will make the CPU exit the loop.
The language construct is again fairly simple. It consists of an expression and
a block of statements (called the **loop body**). To execute a while loop, the
expression is evaluated. If it evaluates to false the loop is finished and
execution continues with the next statement after the loop. But if it evaluates
to true, the loop body will be executed, followed by a jump back to the
beginning: The expression is evaluated again and the same process repeats
itself.

```js
let i = 0;
while (i < 100) {
  bake("carrot cake");
  i = i + 1;
}
```

### Quiz

- Can you think of real life examples that resemlbe these control flows?
- Can you come up with a control flow that couldn't be or would be tedious to
  implement with only these three constructs?
- A phenomenon called **spaghetti code** has been a common problem in the 80's
  and 90's, before the wide adoption of higher level programming languages. Can
  you imagine what it means?

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

### Quiz

- A function can take values as input and produce a new value as output. What
  are the fancy programmer terms for the input values and the output value?
- There's a popular programming paradigm, called **functional programming**. One
  of it's main goals is to compose programs from small pure functions. A pure
  function is a function, which only creates an output value in response to some
  input values and has no other visible side effects. Can you imagine what kind
  of benefits this approach has and which problems it sovles?
- There are many advantages to structuring a program into functions and
  modules. Name at least three.
- A function can have **multiple inputs**, but only creates **one
  output**. Do you have an idea why that choice was made almost universally in programming language design?
  How could you work around it, if you actually want to return multiple output
  values.

## 6 Multi-Tasking

**How can we write programs that perfrom mutliple tasks at the same time?**

There are many solutions to that problem, each with its own advantages and draw
backs. Javascript has a relatively simple but still powerful way of making
multi-tasking possible, while the low level approach is extremely complex,
as it requires keeping track of the execution state of multiple running threads
and storing and restoring the state of CPU registers. Also a mid level approach
to multi-threading using a threading library
is still very challenging, as every read and write to shared memory has to be
explicitly coordinated and synchronized.

### Solution: **Event Loop**

Javascript is fundamentally **single-threaded** which means at every point in
time only one line of code is getting executed.
Still multiple processes can be maintained by that single thread of execution,
as every task that takes a long time, can be pushed to the runtime environment,
which frees the thread again to take up another completely unrelated task while
waiting for the initial task to be finished. Following this scheme javascript
appears to be doing multiple things in parallel, while in reality it is only
switching very quickly between them. This principle where control over the CPU is switched
between different processes is called **preemptive multitasking**.

### Quiz

- What does it mean if a programming language is capable of **multi-threading**?
- Modern computers can support thousands of concurrent threads, even if they
  only have 2 physical CPU cores. How could that be possible?
- The event queue and loop create a bridgefrom the Javascript Runtime into
  the Javascript Engine. Why is it called a **queue** and why a **loop**? Give
  you give examples of an **event**?
