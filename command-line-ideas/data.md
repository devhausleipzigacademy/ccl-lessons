# Data: modelling the world

[Video: JSON
Intro](https://us02web.zoom.us/rec/share/3OVKILfh8XlIeM_ty12CfrMDENT0aaa81yIZ_6cFmEYt19usto76Dm77khrRSezu?startTime=1595937781000)

[Video: Presentation Data Modelling](https://us02web.zoom.us/rec/share/3OVKILfh8XlIeM_ty12CfrMDENT0aaa81yIZ_6cFmEYt19usto76Dm77khrRSezu?startTime=1595946870000)

## Javascript Universe

### Number

```js
42; // Integer
42.53; // Floating Point
4.2e9; // Scientific notation
0xabcd; // Hexadecimal
0b10100100; // Binary

// Special Values

Infinity;
NaN; // Not a Number
```

### String

```js
"Down on the sea";
"Lie on the ocean"`Float on the ocean`;

// Special characters have to be escaped using a backslash
('A newline \n a tab \t a backslash \\ and a double-quote " walk into a bar...');
```

### Boolean

```js
true;
false;
```

### Null & Undefined

These values are used to signify the absence of an actual value. Code should be
written so they can be used interchangeably.

```js
null;
undefined;
```

### Array

```js
["A", "B", "C"] // Homogenous
[1, true, "Yep"] // Heterogenous
[[1, 2], [3, 4]] // Nested
[] // Empty
```

### Object

```js
{} // empty
{
  red: 0xff,
  green: 0xff,
  blue: 0xff
}
{
  name: "Rick Sanchez",
  age: 70,
  occupation: "Scientist",
  alive: true,
  aliases: [
    "Grandpa Rick",
    "Rick the Alien",
    "Tiny Rick",
    "Pickle Rick",
    "Albert Ein-douche",
    "The Big R.",
    "Smartest man in the universe"
  ]
}
```

## JSON and Javascript

**JSON** (Javascript Object Notation) is a text format, which is used to store
and exchange data.
It's syntax is similar to Javascript with a few exceptions:

- For strings only double quotes `""` are allowed
- In objects, keys always have to be wrapped in quotes
- Trailing comma after the last value is not allowed
- `undefined` doesn't exist.
- Functions are not supported.

### Resources

- [JSON Implemetations](https://www.json.org/json-en.html)

### JSON Parser

![JSON Parser](https://gabrielheinrich.github.io/ccl-lessons/command-line-ideas/json-parser.svg)

### Examples

```json
{
  "editor.autoClosingQuotes": "languageDefined",
  "editor.acceptSuggestionOnCommitCharacter": true,
  "editor.codeActionsOnSave": {},
  "editor.suggest.maxVisibleSuggestions": 12,
  "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    }
  }
}
```

```json
{
  "aliceblue": [240, 248, 255, 1],
  "antiquewhite": [250, 235, 215, 1],
  "aqua": [0, 255, 255, 1],
  "aquamarine": [127, 255, 212, 1],
  "azure": [240, 255, 255, 1],
  "beige": [245, 245, 220, 1],
  "bisque": [255, 228, 196, 1],
  "black": [0, 0, 0, 1],
  "blanchedalmond": [255, 235, 205, 1],
  "blue": [0, 0, 255, 1]
}
```

```json
{
  "markers": [
    {
      "name": "Rixos The Palm Dubai",
      "position": [25.1212, 55.1535]
    },
    {
      "name": "Grand Hyatt",
      "location": [25.2285, 55.3273]
    }
  ]
}
```

```json
{
  "categories": [],
  "created_at": "2020-01-05 13:42:29.296379",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "4ZjCBxjrQfWjJgbwW7a55g",
  "updated_at": "2020-01-05 13:42:29.296379",
  "url": "https://api.chucknorris.io/jokes/4ZjCBxjrQfWjJgbwW7a55g",
  "value": "The original Linux kernel was written in Persian by Chuck Norris. Linus Torvalds ported it to C."
}
```

```json
{
  "id": 6498492,
  "node_id": "MDEwOlJlcG9zaXRvcnk2NDk4NDky",
  "name": "javascript",
  "full_name": "airbnb/javascript",
  "private": false,
  "owner": {
    "login": "airbnb",
    "id": 698437,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==",
    "avatar_url": "https://avatars3.githubusercontent.com/u/698437?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/airbnb",
    "html_url": "https://github.com/airbnb",
    "followers_url": "https://api.github.com/users/airbnb/followers",
    "following_url": "https://api.github.com/users/airbnb/following{/other_user}",
    "gists_url": "https://api.github.com/users/airbnb/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/airbnb/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/airbnb/subscriptions",
    "organizations_url": "https://api.github.com/users/airbnb/orgs",
    "repos_url": "https://api.github.com/users/airbnb/repos",
    "events_url": "https://api.github.com/users/airbnb/events{/privacy}",
    "received_events_url": "https://api.github.com/users/airbnb/received_events",
    "type": "Organization",
    "site_admin": false
  }
}
```

### Exercise

Pick one of these applications and write a JSON file that contains example data
that is able to represent the state of the application.

- Todo App
- Recipe Database
- Facebook
- Sheet Music
- Word Document
- Excel Document
- Image File
- Chess Game
- Bank Account
- Monopoly
- Minecraft
- Zoom Meeting
- Sims Game
- Mario Cart
- Browser Bookmarks
- Spotify
- Youtube
- Discord
- Git Repository
