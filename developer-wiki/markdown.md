# Markdown: A developer's word processor

- Why do we need formatted text documents? When is plain text not enough?
- How can we create formatted text documents?
- What's wrong with using .docx?
- What other tools do you know to write and edit formatted text documents?

## Formatted text

Formatted text, styled text, or rich text, as opposed to plain text, has styling
information beyond the minimum of semantic elements: colours, styles (boldface,
italic), sizes, and special features in HTML (such as hyperlinks).

[Examples](https://www.latextypesetting.com/showcase)

### Essential elements of formatted text

- Headings in different strengths
- Paragraphs
- Emphasis (bold, italic)
- Horizontal rule
- Lists (plain and numbered)
- Links
- Images
- Code
- Tables
- Quotes

**How can we write formatted text in VS Code?**

## Markup Languages

In computer text processing, a markup language is a system for annotating a
document in a way that is syntactically distinguishable from the text.

The idea and terminology evolved from the "marking up" of paper manuscripts
(i.e., the revision instructions by editors), which is traditionally written
with a red or blue pencil on authors' manuscripts. In digital media, this "blue
pencil instruction text" was replaced by tags, which indicate what the parts of
the document are, rather than details of how they might be shown on some
display. This lets authors avoid formatting every instance of the same kind of
thing redundantly (and possibly inconsistently).

### Examples

- HTML
- Latex
- Markdown
- [many, many more](https://en.wikipedia.org/wiki/List_of_markup_languages)

## HTML

Hypertext Markup Language (HTML) is the standard markup language for documents
designed to be displayed in a web browser. It can be assisted by technologies
such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and
render the documents into multimedia web pages. HTML describes the structure of
a web page semantically and originally included cues for the appearance of the
document.

### Example

```html
<h1>Heading 1</h1>
<p>
  Lorem ipsum dolor sit amet <strong>consectetur</strong>, adipisicing elit.
  Eum, praesentium.
</p>
<a href="https://google.com">Link to google</a>
```

## Markdown

- Lightweight: easy to read and write
- Convertible to many output formats, most notably HTML
- Widely used for online content (i.e. blogs) and documentation / technical writing.
- _Superset_ of HTML
- File Extension: `.md`

### Example

```md
# Heading 1

Lorem ipsum dolor sit amet **consectetur**, adipisicing elit.
Eum, praesentium.

[Link to google](https://google.com)
```

### Cheatsheet

[Markdown
Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## README

A README is a text file that introduces and explains a project. It contains
information that is commonly required to understand what the project is about.

- Most essential piece of software documentation.
- README.md file in root directory.
- Home page of a source code project
- GitHub will automatically display the rendered README.md on the repositories
  home page.
- [Good example](https://github.com/sindresorhus/pageres)
- [Awesome Readme](https://github.com/matiassingers/awesome-readme)
- [How to write a good readme](https://www.makeareadme.com/)

## Check Questions

- What's the difference between html and markdown?
- What does it mean to say: Markdown is a superset of HTML? Why is it important?
- What is a markdown flavor?
- What is the purpose of a README file?
- How can VS Code help us when working with markdown files?
- What are benefits of using Markdown instead of Word to write formatted text?

## Terminology

- Formatted text vs plain text
- Markdown
- Markup Languages
- HTML

## Open Exercises

- Translate the notes in your developer from plain text to markdown.
- Write a guide for using markdown in markdown.
- Clone READMEs from [Awesome
  README](https://github.com/matiassingers/awesome-readme)  
  If you get stuck, just remember that you can also look at the plain source
  markdown, since it's just a file in the repository.

## References

[Markdown
Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
