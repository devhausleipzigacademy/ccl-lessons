# Rebuilding UI

Boxes all the way down

## Resources

[CSS Katas Repository](https://github.com/gabrielheinrich/css-katas)

## CSS Box Model

![Box
Model](https://gabrielheinrich.github.io/ccl-lessons/one-page-love/box-model.png)

## 1. Sizing

The width and height of a box can be measured in two ways: Either as the
**content-box**, which is only the most inner box (containg text, an image or
child elements) or as the **border-box**, which is the content-box + padding +
border. border-box is much more intuitive, as it is the area that the background
color will cover, hover the default in CSS is the content box. You can change h

```css
* {
  box-sizing: border-box;
}
```

### Width & Height

Unless specified block elements have a width of 100% and a height that is
dependent on the content of the element.

In general it is a good idea to first worry about the width of an element and
let the height dynamically grow with the content.

```css
div {
  width: 10rem;
  height: 20rem;

  height: auto; /* match the size of the content (default) */

  width: 50%; /* half the width of the parent element */

  /* size bounds */
  min-height: 200px;
  max-height: 100vh; /* 100% of the viewport width */
  max-width: 400px; /* mobile friendly ;) */
  max-width: 80ch; /* 80 character, to limit line width for readability */
}
```

### Units

#### Absolute Units

##### px

```css
.element {
  width: 400px;
}
```

Pixels don't have anything to do with the literal screen pixels in the display you are looking at. It's actually an [angular measurement](http://inamidst.com/stuff/notes/csspx).

Pixels are still a canonical measurement on the web though as they are consistently handled, many other lengths map directly to pixels, and JavaScript speaks in pixels.

##### in, cm, mm

Inches and Centimeters are a physical measurement, but in CSS land, they just map directly to pixels. Feel free to chime in with use cases in the comments and I'll add them here, but I have never seen a practical use case for this or the rest of these physical measurements.

```
1in == 96px
1cm == 37.8px
1mm == 0.1cm == 3.78px
```

#### Font-relative Untis

##### em

```css
.element {
  width: 40em;
}
```

A relative unit. Originally a [typographic measurement](<https://en.wikipedia.org/wiki/Em_(typography)>) based on the current typefaces capital letter "M". Although the length doesn't change when you change `font-family`, it does change when you change the `font-size`.

Without any CSS at all, 1em would be:

```
1em == 16px == 0.17in == 12pt == 1pc == 4.2mm == 0.42cm
```

If any CSS changes the font size (at any level in the document), 1em becomes whatever the new `font-size` is.

Making things a tiny bit funkier, em units multiply upon themselves when applied to `font-size`, so if an element with font-size 1.1em is within an element with font-size 1.1em within yet another element with font-size 1.1em, the resulting size is 1.1 ✕ 1.1 ✕ 1.1 == 1.331rem (root em). Meaning even if an element is set to, say 10em, that doesn't mean it will be a consistent width everywhere it appears. It could be wider or narrower if the `font-size` changes ([see proof](https://codepen.io/chriscoyier/pen/HizKe)).

##### rem

```css
.element {
  width: 40rem;
}
```

A relative unit, like `em`, but it is always relative to the "root" element (i.e. `:root {}`) rather than using the cascade, like `em` does. This vastly simplifies working with relative units.

##### points

```css
.element {
  width: 120pt;
}
```

A point is a physical measurement equal to 1/72 of an inch. Points are the most common way to size type outside of CSS (likely why it is supported in CSS). It's still common in language "Of course they set this important information in tiny eight-point type!".

Points make the most sense in print stylesheets for sizing type, where physical media is involved, but there is nothing preventing you from using pt for screen media or anywhere else a length is accepted.

#### Viewport Percentage Units

##### vw

```css
.element {
  width: 10vw;
}
```

This is the "viewport width" unit. 1vw is equal to 1% of the width of the viewport. It is similar to percentage, except that the value remains consistent for all elements regardless of their parent elements or parent elements width. A bit like how rem units are always relative to the root.

Sizing type is the major use case here. See [Viewport Sized Typography](https://css-tricks.com/viewport-sized-typography/).

##### vh

```css
.element {
  width: 20vh;
}
```

This is the same as the `vw` (viewport width) unit only it is based on the viewport height instead.

##### vmin

```css
.element {
  width: 20vmin;
}
```

This value will be whichever is smaller at the moment, `vw` or `vh`. In the standard use case of sizing type, this may be a more useful metric than `vw` or `vh` on their own in determining true screen size.

#### Percentage

```css
.element {
  width: 50%;
}
```

A length set in percentage is based on the length of the same property of the parent element. For example, if an element renders at 450px width, a child element with a width set to 50% will render at 225px.

### Tailwind Size Scale

It's a good idea to come up with a system for choosing sizes. Here are the size
values used by the popular tailwind css framework.

```
0.25rem
0.5rem
0.75rem
1rem
1.5rem
2rem
2.5rem
3rem
4rem
5rem
6rem
8rem
10rem
12rem
14rem
16rem
```

## 2. Spacing

#### Padding & Margin

Padding is internal white space, adding extra space inside the element.

Margin is external white space, pushing other
elements away.

```css
div {
  padding-top: 10px;
  padding-left: 0px;
  padding-bottom: 5px;
  padding-right: 20px;

  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  margin-right: 10px;

  margin-left: -20px;
  /* negative values work as well and will lead to overlap */
}
```

##### Short Form: top right bottom left (clockwise)

```css
div {
  padding: 1rem 2rem 3rem 4rem;
}
/* is equivalent to */
div {
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  padding-left: 4rem;
}
```

##### Short Form 2: vertical horizontal)

```css
div {
  margin: 3rem 1rem;
}

div {
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

/* Hot trick for centering fix width containers horizontally */

.centered {
  margin: 0 auto;
}
```

## 3. Display

```css
div {
  display: inline; /* Default of all elements, unless UA stylesheet overrides */
  display: inline-block; /* Characteristics of block, but sits on a line */
  display: block; /* UA stylesheet makes things like <div> and <section> block */
  display: none; /* Hide */
}
```

#### Inline

The default value for elements. Think of elements like `<span>`, `<em>`, or `<b>` and how wrapping text in those elements within a string of text doesn't break the flow of the text.

An inline element will not accept `height` and `width`. It will just ignore it.

#### Inline Block

An element set to `inline-block` is very similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a `width` and `height` which will be respected.

#### Block

A number of elements are set to `block` by the browser UA stylesheet. They are usually container elements, like `<div>`, `<section>`, and `<ul>`. Also text "blocks" like `<p>` and `<h1>`. Block level elements do not sit inline but break past them. By default (without setting a width) they take up as much horizontal space as they can.

#### None

Entirely removes the element from the page. Note that while the element is still
in the DOM, it is removed visually and any other conceivable way (you can't tab
to it or its children, it is ignored by screen readers, etc).

### 4. Position

The `position` property can help you manipulate the location of an element, for example:

```css
.element {
  position: relative;
  top: 20px;
}
```

Relative to its original position the element above will now be nudged down from the top by 20px.

#### Static

Every element has a static position by default, so the element will stick to the normal page flow. So if there is a `left`/`right`/`top`/`bottom`/`z-index` set then there will be no effect on that element.

#### Relative

An element’s original position remains in the flow of the document, just like the `static` value. But now `left`/`right`/`top`/`bottom`/`z-index` will work. The positional properties “nudge” the element from the original position in that direction.

#### Absolute

The element is removed from the flow of the document and other elements will behave as if it’s not even there whilst all the other positional properties will work on it. An absolute positioned element is always relative to the next `postion: relative` element in the DOM tree.

#### Fixed

The element is removed from the flow of the document like absolutely positioned elements. In fact they behave almost the same, only fixed positioned elements are always relative to the document, not any particular parent, and are unaffected by scrolling.

#### Sticky (Experimental)

The element is treated like a `relative` value until the scroll location of the viewport reaches a specified threshold, at which point the element takes a `fixed` position where it is told to stick.

#### Inherit

The `position` value doesn’t cascade, so this can be used to specifically force it to, and `inherit` the positioning value from its parent.

### 5. Background, Borders & Shadows

```css
div {
  background-color: green;

  background: transparent url("wallpaper.png") no-repeat center/cover;

  border: 1px solid black;

  border-left: 1px dashed red;

  border-radius: 1rem; /* rounded corners */
  border-top-left-radius: 2rem;

  border-radius: 100%; /* circle shape */

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  /* box-shadow: offset-x offset-y blur spread color */

  /* Very often to shadows are combined for direct and ambient light*/
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

## Check Questions

- What's the difference between `box-sizing: border-box` and `box-sizing: content-box`? Which of the two is the default?
- What's the difference between **margin** and **padding**?
- What's the difference between **em** and **rem**?
- What do the units **vh** and **vw** stand for?
- What does `margin: 1rem 2rem 3rem 4rem` stand for?
- What's the difference between `display: block` and `display: inline`?
- What's the difference between `display: inline` and `display: inline-block`?
- What's the difference between `position: absolute` and `position: fixed`?
- What's the difference between `position: absolute` and `position: relative`
- How can you create a circle shape in CSS?
- What does the value `inherit` stand for in CSS?

## Next Steps

- Images and object-fit
- flex & grid
- Transforms
- Transitions
- float
