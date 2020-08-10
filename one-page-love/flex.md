# Flex & Grid

## Resources

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[What the Flexbox - Free Video Course](https://flexbox.io/)

[Flexyboxes allows you to see code samples and change parameters to see how Flexbox works visually](https://the-echoplex.net/flexyboxes/)

## Outline

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
