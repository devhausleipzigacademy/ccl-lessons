# Flex & Grid: Responsive Layouts

## Resources

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[What the Flexbox - Free Video Course](https://flexbox.io/)

[Flexyboxes allows you to see code samples and change parameters to see how Flexbox works visually](https://the-echoplex.net/flexyboxes/)

## Flex

### 1. Terminology

![Flexbox Terminology](https://www.freecodecamp.org/news/content/images/2019/10/image-32.png)

#### flex container

The flex container is the element that got the `display: flex` property on it. It holds one or more flex items.

#### flex item

A flex item is the direct child of a flex container. Every direct child of a flex container automatically becomes a flex item.

#### main axis

The main axis of a flex container is the primary axis along which flex items are laid out. The direction is based on the flex-direction property.

#### main start | main end

The flex items are placed within the container starting on the main-start side and going toward the main-end side.

#### main size

The width or height of a flex container or flex item, whichever is in the main dimension, is that box’s main size. Its main size property is thus either its width or height property, whichever is in the main dimension.

#### cross axis

The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.

#### cross start | cross end

Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.

#### cross size

The width or height of a flex item, whichever is in the cross dimension, is the item's cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

### 2. Display Flex

`display: flex` is tells your browser, "I wanna use flexbox with this container, please."

A `div` element defaults to `display: block;`. An element with this display setting takes up the full width of the line it is on. Here is an example of four colored divs in a parent div with the default display setting:

![display: block](https://cdn-media-1.freecodecamp.org/images/ChnkgUaWEN6dmtS4EQCG60uqIjZVphsErq91)

To use flexbox on a section of your page, first convert the parent container to a flex container by adding `display: flex;` to the CSS of the parent container.

This will initialize this container as a flex container and apply some default flex properties.

![display: flex](https://cdn-media-1.freecodecamp.org/images/6WwoIEc45lUHUcFQCmD8GmziiISm2lO64Y1-)

### 3. Flex Direction

`flex-direction` allows you to control how the items in the container display. Do you want them left to right, right to left, top to bottom, or bottom to top? You can do all of these easily by setting the `flex-direction` of the container.

The default arrangement after applying `display: flex` is for the items to be arranged along the main axis from left to right. The animation below shows what happens when `flex-direction: column` is added to the container element.

![flex direction](https://cdn-media-1.freecodecamp.org/images/wEg7wdKEfv9-bqaiB-t9hzOapBPiqZVYNFIh)

You can also set `flex-direction` to `row-reverse` and `column-reverse`.

![reverse](https://cdn-media-1.freecodecamp.org/images/zYdQGSmhtMyqcAbEUDoEehohC8E-gtgvQx6b)

### 4. Justify Content

`justify-content` is a property to align items in the container along the main axis (see terminology diagram above). This changes depending on how content is displayed. It allows us to fill any empty space on rows and define how we want to ‘justify’ it.

Here are our the most common options used to justify content: `flex-start | flex-end | center | space-between | space-around`.

Here is what the different options look like:

![justify content](https://cdn-media-1.freecodecamp.org/images/OBGVr-DdHiQ2y9VOWuhXqXeGnFnyDSBTx7hv)

`space-between` distributes items so that the first item is flush with the start and the last is flush with the end. `space-around` is similar but items have a half-size space on either end.

### 5. Align Items

`align-items` allows us to align items along the cross axis (see terminology diagram above). This allows content to be positioned in many different ways using justify content and align items together.

Here are the most common options used to align items: `flex-start | flex-end | center | baseline | stretch`

For `stretch` to work how you would expect, the height of the elements must be set to `auto` instead of a specific height.

![align items](https://cdn-media-1.freecodecamp.org/images/UgsULw0Kk49l-l1wSzeurYNJKCmcA-01oE8a)

Now we'll use both `justify-content` and `align-items`. This will show off the difference between the main axes and the cross axes.

![justify and align](https://cdn-media-1.freecodecamp.org/images/u9tCV-zRt3qpgSyNQt53e-eRz0-HIrsqqOk-)

### 6. Align Self

`align-self` allows you to adjust the alignment of a single element.

It has all the same properties of `align-items`.

In the following animation, the parent div has the CSS `align-items: center` and `flex-direction: row`. The first two squares cycle through different `align-self` values.

![align self](https://cdn-media-1.freecodecamp.org/images/HbnMZT330ylw5idocqrjOfp9DrlZt9JrJm9o)

### 7. Flex Wrap

Flexbox by default will try to fit all elements into one row. However, you can change this with the `flex-wrap` property. There are three values you can use to determine when elements go to another row.

The default value is `flex-wrap: nowrap`. This will cause everything to stay in one row from left to right.

`flex-wrap: wrap` will allow items to pop to the next row if there is not enough room on the first row. The items will be displayed from left to right.

`flex-wrap: wrap-reverse` also allows items to pop to the next row but this time the items are displayed from right to left.

### 8. Flex Flow

`flex-flow` combines the use of `flex-wrap` and `flex-direction` into one property. It is used by first setting the direction and then the wrap. Here is an example: `flex-flow: column wrap`;

### 9. Align Content

`align-content` is used for aligning items with multiple lines. It is for aligning on the cross axis and will have no effect on content that is one line.

Here are the options: `align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## Media Queries

Media queries allow you to customize CSS for different devices.

```css
.gallery {
  flex-direction: column;
}

/* for screens wider than 420px display pictures in the gallery on rows */
@media screen and (max-width: 420px) {
  .gallery {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
```

## Grid

### Resources

[Awesome free video course on grid by Wes Bos](https://cssgrid.io/)

[THE grid reference](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Challenges

- [Play around with grid](https://cssgridgarden.com/)
- [Grid Exercises 1](https://coursework.vschool.io/css-grid-practice/)
- [Grid Exercises 2](https://github.com/danmcatee/ccl-grid-exercises)

### Why learn grid?

- Easier to create two dimensional layouts
- Simpler markup
- Flexible
- Skip frameworks
- Browser Support

![Grid Example](https://gabrielheinrich.github.io/ccl-lessons/one-page-love/grid.png)

```html
<!-- GRID -->

<div class="container">
  <div class="header">HEADER</div>
  <div class="menu">MENU</div>
  <div class="content">CONTENT</div>
  <div class="footer">FOOTER</div>
</div>
```

```html
<!-- BOOTSTRAP -->

<div class="row">
  <div class="col-12 header">HEADER</div>
</div>
<div class="row">
  <div class="col-4 menu">MENU</div>
  <div class="col-8 content">CONTENT</div>
</div>
<div class="row">
  <div class="col-12 footer">FOOTER</div>
</div>
```

### Your first grid

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

![Without CSS](https://gabrielheinrich.github.io/ccl-lessons/one-page-love/without-css.png)

```css
.container {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: 100px 100px;
}
```

![With CSS](https://gabrielheinrich.github.io/ccl-lessons/one-page-love/with-css.png)

### Defining a grid

- `display: grid;`
  - With a grid defined on the parent element, all direct children become "grid items"
- `grid-template-columns`
- `grid-template-rows`
  - With these properties we define an explicit grid.
- `grid-column-gap`
- `grid-row-gap`
- `grid-gap`
  - We can create a gap between rows and columns.
- `grid-template-columns: 1fr 1fr 1fr;`
  - The fr unit is a fraction unit, representing a fraction of the available space in the container
- `grid-template-columns: 1fr 2fr 1fr;`
  - We have created 3 columns the units add up to 4. The space is split into 4 equal parts, the first track is given 1 part, the second is given 2 parts and the third is given 1 part again.
- `grid-template-columns: repeat(3, 1fr);`
  - The repeat syntax lets us define a repeating pattern of tracks
- The explicit grid is defined with rows and columns, If we didn't define rows however, grid would create implicit row tracks for us. These will be auto sized by default.
- `grid-auto-rows: 200px;`
  - We can define the size of implicit rows and columns with the properties `grid-auto-rows` and `grid-auto-columns`
- `grid-template-columns: repeat(auto-fill, 200px);`
  - Use the `auto-fill` keyword and grid will create as many tracks as will fit in the container
- `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`
  - The `minmax()` function enables the creation of flexible grids. The first value is the minimum size of the grid track, the second the max size. Set that to 1fr to allow the track to take up remaining space.

### Placing items on the grid

![Grid diagram](https://webkit.org/wp-content/uploads/grid-concepts.svg)

#### Grid track

A grid track is the space between two grid lines. Tracks can be horizontal or vertical (rows or columns)

#### Grid Lines

Lines can be horizontal or vertical. They are referred to by number and can be named

#### Grid Cell

The smallest unit on our grid, a grid cell is the space between 4 grid lines. It's just like a table cell.

#### Grid Area

Any area of the grid bound by 4 grid lines. It can contain multiple grid cells.

#### Using line numbers

- [Line based placement](https://codepen.io/rachelandrew/pen/RPXNod)
- [Line based placement spanning tracks](https://codepen.io/rachelandrew/pen/XbvJMz)
- [Line based placement spanning tracks with the span keyword](https://codepen.io/rachelandrew/pen/oXKgwa)

#### Defining Grid Areas

- [Example](https://codepen.io/rachelandrew/pen/oXKgoQ)

### Box alignment

- [Box alignment align-items](https://codepen.io/rachelandrew/pen/WQNqKy)
  - Aligns grid items along the block (column) axis
- [Box alignment justify-items](https://codepen.io/rachelandrew/pen/NGWZLM)
  - Aligns grid items along the inline (row) axis
- [Box alignment align-self](https://codepen.io/rachelandrew/pen/KdKLLX)
  - Aligns grid item inside a cell along the block (column) axis
- [Box alignment justify-self](https://codepen.io/rachelandrew/pen/dYyBeM)
  - Aligns grid item inside a cell along the inline (row) axis

### Nested Grid

- [Example](https://codepen.io/rachelandrew/pen/NqQPBR)

[Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
