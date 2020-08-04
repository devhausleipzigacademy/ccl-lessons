# HTML & CSS: Hypertext with style

- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

## HTML

Hyper Text Markup Language: Inspired by the idea of markup

### Syntax

Opening and closing tag with text content

```html
<h1>A great heading</h1>
<p>This is a paragraph</p>
```

Self closing tag

```html
<br />
```

Nested tags

```html
<section>
  <h2>Section Title</h2>
  <p>Section Body Text</h2>
</section>
```

Attributes

```html
<a href="https://github.com">Go to github</a>

<img src="img/code-camp-leipzig-logo.png" alt="Code Camp Leipzig" />
```

Comments

```html
<!-- This is a comment -->
```

Entities: Special Characters

```html
<p>Less than sign: &lt; and greater than: &gt;</p>

<p>Copyright &copy;</p>

<p>Smiley: &#128512;</p>
```

Output:

<p>Less than sign: &lt; and greater than: &gt;</p>

<p>Copyright &copy;</p>

<p>Smiley: &#128512;</p>

### HTML Document Structure

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

`!DOCTYPE html`: Specify that this is indeed an html file

`head`: contains meta information. Often also contains a link to a
stylesheet or javascript

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My First Website</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="index.js" defer></script>
</head>
```

`body`: Visible content of the website

```html
<body>
  <h1>Hello World</h1>
</body>
```

### id's & classes

`id` and `class` are attributes you can freely add to any element in the body of
an html document.
They are used to make individual elements referenceable by CSS and Javascript.

Id's are only used to identify individual elements. Every id should always be used
only once on every page and an element can only have one id.

```html
<button id="login-button">Login</button>
```

Classes can be used multiple times and can be used to identify a group of
elements.

```html
<div class="message-box">Welcome to the website!</div>
```

An element can also have multiple classes

```html
<div class="message-box error-message">We are sorry, something went wrong.</div>
```

### Essential HTML Tags

#### Text

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<p>Paragraph with <em>emphasized text</em> and <strong>strong text</strong></p>

<a href="https://some.domain.com">Link (anchor)</a>

<img src="/url/to/image.png" alt="image description" />

<code lang="javascript">const add = (a, b) => a + b</code>

<ul>
  <li>Unordered</li>
  <li>List</li>
  <li>Items</li>
</ul>

<ol>
  <li>Ordered</li>
  <li>List</li>
  <li>Items</li>
</ol>

<!-- Line Break -->
<br />

<table>
  <!-- tr: Table row -->
  <tr>
    <!-- th: Table header -->
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <!-- td: Table data cell -->
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

#### UI Elements

```html
<button>Click me</button>

<form>
  <label for="first-name">First Name:</label>
  <input type="text" name="first-name" />
  <label for="last-name">Last Name:</label>
  <input type="text" name="last-name" />
</form>
```

[More input types: radio, select, date, etc...](https://www.w3schools.com/html/html_form_input_types.asp)

#### Block Containers

Generic

```html
<div>Generic Container</div>
<span>Inline container, which won't interrupt the text flow</span>
```

Semantic

```html
<main>Main Content</main>
<section>Section</section>
<header>Header</header>
<footer>Footer</footer>
<nav>Navigation</nav>
```

#### Embedding other pages: iframe

An iframe can be used to embed another external website into your page.
For example a youtube video:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/3QhU9jd03a0"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

### Emmet

[Cheatsheet](https://docs.emmet.io/cheat-sheet/)

## CSS

Cascading Style Sheet: add styling to a webpage

### Syntax

CSS is composed out of rule sets. Each rule set starts with a selector which specifies for
which html elements the rules should apply followed by the rules:

```css
h1 {
  color: blue;
}
```

`h1` is called the selector. In this case all elements, that have the tag `h1`
are selected.

`color: blue;` is a rule. It sets the property `color` to the value `blue`.

### Including CSS in Html

Method 1: External style sheet added with a link tag inside `<head>`

```html
<link rel="stylesheet" href="styles.css" />
```

Method 2: Embedded style sheet inside `<head>` tag

```html
<style>
  h1 {
    color: blue;
  }
</style>
```

Inline Styles: You can also set properties directly on an element using the
`style` attribute.
This will overwrite any previously set rules.

```html
<h1 style="color: green;">A green heading</h1>
```

### Styling Text

```css
p {
  /* Text Color */
  color: black;
  color: #232323; /* RGB as hexadecimal values*/
  color: rgba(0, 0, 0, 0.75); /* RGB + Alpha for transparent text */
  color: hsl(180, 20%, 30%); /* Hue, Saturation, Lightness */

  /* Size */
  font-size: 16px; /* Pixel value */
  font-size: 2rem; /* 2 times the Root Font Size */

  /* Font Style */
  font-style: normal;
  font-style: italic;

  /* Weight */
  font-weight: normal;
  font-weight: bold;
  font-weight: 100; /* Extra Light */
  font-weight: 900; /* Black */

  /* Decoration */
  text-decoration: underline;
  text-decoration: none;
  text-decoration: line-through;

  /* Alignment */
  text-align: left;
  text-align: center;
  text-align: right;
  text-align: justify;

  line-height: 2;

  letter-spacing: 4px;
  word-spacing: 20px;
}

/* Lists */
ul {
  list-style-type: none;
  list-style-type: square;
  list-style-type: circle;
}
```

#### Using a custom font

We have to provide a link to the actual font in order to use it.

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
```

Then we can actually use the font using the `font-family` property, where we can
also provide fallback fonts, in case the link doesn't work.

```css
body {
  font-family: "Roboto", "Arial", sans-serif;
}
```

[Google Fonts](https://fonts.google.com/)

### Basic Selectors

**Universal Selector**: selects every element

```css
* {
}
```

**Tag Selector**: every element with matching tag

```css
p {
}
```

**Id Selector**: element with matching id

```css
#login-button {
}
```

**Class Selector**: every element with matching class

```css
.message-box {
}
```

### Advanced Selectors

**Tag Specific Selector**: Select all paragraphs that have the class message

```css
p.message {
}
```

**Descendant Selector**: Select all headings inside the footer

```css
footer h1 {
}
```

**Child Selector**: Select all div elements that are a direct child of the footer

```css
footer > div
```

**Attribute Selector**: Select all inputs of type text

```css
input[type="text"] {
}
```

**Pseudo Classes**: Apply rules to links while the mouse cursor is hovering over
the link

```css
a:hover {
}

/* Other examples */
a:active {
}
a:visited {
}
```

**::before and ::after Selector**: Add an element before/after every matching element

```css
li::before {
  content: ">>";
}

h1::after {
  content: "!";
}
```

### Game: CSS Diner

[CSS Diner](https://flukeout.github.io/)
