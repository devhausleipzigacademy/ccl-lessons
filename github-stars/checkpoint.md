# Half-Way Checkpoint

## 1. Fizz Buzz

[Codewars Challenge](https://www.codewars.com/kata/5300901726d12b80e8000498/javascript)

## 2. Leetspeak

```bash
leetspeak "Hello World"
H3ll0 W0rld
```

Write a command line tool, that converts the input into leetspeak, i.e.
letters are replaced as follows:

```none
a => 4
b => 8
e => 3
g => 6
i => 1
o => 0
s => 5
t => 7
```

[Example](https://alexdevero.com/labs/leetspeak/)

## 3. Sticky Footer

Create an html webpage with a sticky footer layout, i.e. a footer that will always
stick to the bottom of the browser window.

### Sticky

<div style="border: 1px solid black; width: 300px; height: 300px; text-align: center; margin-bottom: 2rem; background-color: white; color: black;">
<div style="display: flex; flex-direction: column; min-height: 100%">
  <main style="flex-grow: 1; padding: 1rem;">Main</main>
  <footer style="background-color: black; color: white; padding: 1rem;">Footer</footer> 
</div> 
</div>

### Non Sticky

<div style="border: 1px solid black; width: 300px; height: 300px; text-align: center; margin-bottom: 2rem; background-color: white; color: black;">
<div>
  <main style="padding: 1rem;">Main</main>
  <footer style="background-color: black; color: white; padding: 1rem;">Footer</footer> 
</div> 
</div>

## 4. Responsive Grid

Create a grid of cards, that automatically adjusts the number of columns based
on the width of the viewport. Make sure every card has at least a width of 12rem
and there's always a gap of 1rem between cards.
The max width of the whole grid should never extend past 1024px.

<div style="border: 1px solid black; width: 100%; text-align: center; margin-bottom: 2rem; background-color: white; color: white;">

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); margin: 0 auto; max-width: 30rem;">
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
  <div style="padding: 1rem; background-color: blue;">Card</div>
</div>
</div>

## 5. Vanilla Form Validation

Create a newsletter subscribe form, with a name and an email field.

Add form validation that will show an error message next to each of the input fields
when its input is missing or incorrect (e.g. an email that doesn't contain an @ sign)

If all the inputs are correct show a popup modal window and thank the user for
subscribing to the newsletter.

Advanced: Validate the input data not only when the user hits the subscribe
button, but already when the input field loses focus (the event is called **blur**)

### Hints

Getting access to an input form's value in Vanilla JS

html

```html
<input type="text" name="name" id="name" />
```

```js
const nameInput = document.getElementById("name");

nameInput; // A string containing the content of the input field.
```

## 6. Vue Form Validation

Translate the Login form from step 5 into Vue.

Advanced: If you are up for a challenge try to use the Vuelidate library to
handle the form validation.

[Vuelidate](https://vuelidate.js.org/)

## 7. Animate on scroll

Start with the HTML page at the end of the article and add a transition effect for each of the images, that will
fade them in and will be triggered as soon as the user scrolls them into the viewport.

Hints:

```js
// Add an event listener that gets called whenever the page is scrolled
document.addEventListener("scroll", () => {});

// Get the Y coordinate of the top of an element in the page
document.getElementById("example").offsetTop;

// Get the current scroll position
window.pageYOffset;

// Get the height of the viewport
window.innerHeight;
```

Advanced: Experiment with other transition styles, like moving in from the side
or from the bottom.

## 8. Data Table

Create a vue component that displays the following data as a table

```js
[
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];
```

Advanced: Add a search field to filter rows

## 9. Slide in Hamburger Menu

Create a Responsive Slide-in Hamburger Menu in Vue.

[Reference Example](https://materializecss.com/)

To add a transition effect in Vue, check out this documentation: https://vuejs.org/v2/guide/transitions.html

## 10. Unit Testing Leetspeak (hard)

Add some unit tests to the Leetspeak Command Line Application. First research
how to setup Jest in a node application.

[Jest](https://jestjs.io/)

## Resources

On Scroll Animation Starting Point

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Picture Gallery</title>
  </head>
  <body>
    <section>
      <img
        src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=953&q=80"
        alt=""
      />
    </section>
    <section>
      <img
        src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80"
        alt=""
      />
    </section>
    <section>
      <img
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt=""
      />
    </section>
    <section>
      <img
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        alt=""
      />
    </section>
    <section>
      <img
        src="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt=""
      />
    </section>
  </body>
  <style>
    body {
      margin: 0;
    }

    section {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 50vh;
      height: 50vh;
      object-fit: cover;
    }

    section:nth-of-type(1) {
      background-color: hsl(10, 70%, 50%);
    }

    section:nth-of-type(2) {
      background-color: hsl(40, 70%, 50%);
    }

    section:nth-of-type(3) {
      background-color: hsl(70, 70%, 50%);
    }

    section:nth-of-type(4) {
      background-color: hsl(100, 70%, 50%);
    }

    section:nth-of-type(5) {
      background-color: hsl(130, 70%, 50%);
    }

    section:nth-of-type(6) {
      background-color: hsl(160, 70%, 50%);
    }
  </style>
</html>
```
