# Javascript Examples

## Bindings & Operators

```js
const milliseconds = 31536000000;
const seconds = milliseconds / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;
const years = days / 365;
console.log(milliseconds + "ms are " + years + "year(s)");
```

```js
const noun = "Zebra";
const adjective = "exhiliatory";
const pluralNoun = "Bean bags";

const fortune = `Those born under the planetary sign of the ${noun} possess ${adjective} personalities and are forever searching for new ${pluralNoun} to conquer.`;

console.log(fortune);
```

### Exercise

#### Milliseconds Lived

Write a command line application that takes a birthdate as an argument and tells
the user how many milliseconds, seconds and days they have lived.

Extra: Take the average life expectancy to tell the user how many seconds /
days they are likely to still live.

**Hints**

```js
// Get the first user provided command line argument
process.argv[2];

// Convert a string into a Date object
const birthdayAsString = "6. February 1991";
const birthdayAsDate = new Date(birthdayAsString);

// Get the current date
const now = new Date();

// Getting the number of milliseconds since 0:00 1.1.1970 from a date
now.getTime();
// Will return a negative value if the date was before 0:00 1.1.1970
```

#### Mad Lib

Write a Mad Lib or Fortune Teller. You can take the inputs directly from the
command line arguments or use the readline-sync library to query the user for
some inputs. Then use string interpollation to construct a mad lib story or a
fortune.

Extra: Make it a simple website with an index.html, by using the prompt and
document.write functions and host it on GitHub Pages.

[Mad Lib Inspiration](https://www.madtakes.com/)

## if

```js
const randomValue = Math.random();

if (randomValue <= 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
```

```js
const emotion = "happy";

if (emotion == "sad") {
  console.log(":(");
} else if (emotion == "happy") {
  console.log(":)");
} else {
  console.error("Sorry, we don't have a smiley matching the emotion" + emotion);
}
```

### Exercises

#### Roll the dice

Write a command line application that will simulate a dice roll and print out a
number between 1 and 6.

Extra 1: Make it roll two dice and print out the sum of the dice.

Extra 2: Make the number of dice a parameter that can be specified through the
command line. If no argument is given, make it default to 2

Extra 3: Make the number of sides in a dice another parameter to be specified on
the command line, but which will default to 6.

Hard: Roll the dice 10000 times and keep track of how often which value was
rolled. Print out the results.

#### Emojis

Write a command line application that takes in an emotion or some other keyword and returns
a matching emoji. Here's a github repository which contains all emojis in
javascript: [emoji](https://github.com/theraot/emoji/blob/master/emoji.js)

## Loops

```js
const factor = 7;
for (let i = 1; i <= 10; ++i) {
  const output = `${i} * ${factor} = ${i * factor}`;
  console.log(output);
}
```

```js
const character = "#";
let result = "";
while (result.length < 10) {
  result = result + character;
}
```

### Exercises

#### Power Table

For a given base b print the result of taking b to the power of 1, 2, 3, 4, ...

Make the base a command line argument

Sample Output

```none
2^1 = 1
2^2 = 2
2^3 = 4
2^4 = 8
2^5 = 16
...
```

#### Leetspeak

Write a program that takes in a string as an argument and translates it to
Leetspeak. Replace characters like this

```none
a and A => 4
b and B => 8
e and E => 3
i and I => 1
o and O => 0
s and S => 5
```

## Functions

```js
const makeNoise = function () {
  console.log("\u{7}");
};

makeNoise();
```

```js
const min = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

min(1, 3);

const x = 1;
min(3, x);
```

Function as values

```js
let launchMissles = function () {
  console.log("Kabooom!");
};

if (safeMode) {
  launchMissles = () => {
    console.log("Nothing happens...");
  };
}

launchMissles();
```

Function as argument

```js
const timeInMs = 10000;

setTimeout(() => {
  console.log("10 seconds have passed...");
}, timeInMs);
```

```js
document.body.addEventListener("click", (event) => {
  alert("You clicked, and this was the triggered event:", event);
});
```

### Exercises

#### Refactoring

Go through your solutions to the previous exercises and wrap some components into individual functions.

#### Repeat String

Write a function that takes in a string and a number n and returns a string, which
contains n repetitions of the input string.

```js
repeat("#", 10); // "##########"
```

#### Cowsay

Write a clone of the famous cowsay program.

[Cowsay on Wikipedia](https://en.wikipedia.org/wiki/Cowsay)

#### Triangle

Write a program that prints a triangle like this

```none
#
##
###
####
#####
######
#######
```

Extra: Make the size of the triangle a command line argument

Hard extra: You can actually use this to plot functions, like a square function, sin
function, Random, etc...

#### Chessboard

Write a programm that paints a chessboard pattern like this

```none
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
```

Extra: Make the size of the chessboard a command line argument

Explorative Extra: Get creative and make it a different patterns.

```none
|| \@_\@_\@_\@_\@_ ||
||  |  |  |  |  |  ||
|| /"\/"\/"\/"\/"\ ||
|| \@_\@_\@_\@_\@_ ||
||  |  |  |  |  |  ||
|| /"\/"\/"\/"\/"\ ||
|| \@_\@_\@_\@_\@_ ||
||  |  |  |  |  |  ||
|| /"\/"\/"\/"\/"\ ||
```
