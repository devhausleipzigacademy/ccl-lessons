# Insomnia: Calling APIs

## Terminology: REST API

### API

a set of functions and procedures allowing the creation of applications that
access the features or data of an operating system, application, or other
service. An application programming interface defines the
kinds of calls or requests that can be made, how to make them, the data formats
that should be used, the conventions to follow.

### REST

Representational state transfer (REST) is a software architectural style that
defines a set of constraints to be used for creating Web services. RESTful Web
services allow the requesting systems to access and manipulate textual
representations of Web resources by using a uniform and predefined set of
stateless operations (CRUD).

## HTTP

### Resources

- [HTTP Status Codes](https://http.cat/)

- [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Requests

|          | Example                                                      |
| -------- | ------------------------------------------------------------ |
| Method   | `GET POST PUT PATCH DELETE OPTION HEAD`                      |
| Base URL | `https://api.chucknorris.io/`                                |
| Path     | `/jokes/random`                                              |
| Query    | `?\_limit=20&\_page=3`                                       |
| Headers  | `"Content-type": "application/json;"`                        |
| Body     | JSON, e.g. `{"name": "Rick", "password": "secret-password"}` |

### Responses

|             | Example                           |
| ----------- | --------------------------------- |
| Status Code | 200 404 400 300, etc...           |
| Headers     | `"Cache-Control": "max-age=3600"` |
| Body        | json, html, js, css, png, ...     |

### Insomnia

Insomnia is a GUI tool to execute HTTP Requests. You can use it to
call any Web Service API. Start by installing it on your
computer:

[insomnia.rest](https://insomnia.rest/)

### API Challenge

Use Insomnia and the linked API's and their documentation to complete these
tasks. Don't Google the answers!!!

- Find a Chuck Norris Joke about linux.
- Alofi is the capital of which country.
- Get some programming quote
- Download the astronomy picture of the day
- How many github repositories are written in javascript compared to python or php
- Get the version of google.com from the 1. January 2000
- Generate a random Avatar
- For how many deaths was Walter White responsible throughout the series
  Breaking Bad
- Get a wheather forecast for Leipzig

#### API's

- [Chuck Norris API](https://api.chucknorris.io/)
- [Country API](https://restcountries.eu/)
- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/)
- [NASA API](https://api.nasa.gov/index.html)
- [GitHub API](https://developer.github.com/v3/)
- [Internet Archive API](https://archive.readme.io/docs/website-snapshots)
- [Avatar Generator API](https://avatars.dicebear.com/)
- [Breaking Bad API](https://breakingbadapi.com/documentation)
- [Meta Wheather API](https://www.metaweather.com/api/)

## CRUD

**C**reate **R**ead **U**pdate **D**elete

### Resources

- [API Best practices](https://github.com/elsewhencode/project-guidelines#api)
- [JSON Server Reference](https://github.com/typicode/json-server)

### REST CRUD Routes for a resource

| Operation        | Method | Route    | Body                             | Response                 |
| ---------------- | ------ | -------- | -------------------------------- | ------------------------ |
| Create           | POST   | /posts   | New post                         | The created post         |
| Find All         | GET    | /posts   |                                  | Array of posts           |
| Find One         | GET    | /posts/1 |                                  | Post with the id 1       |
| Update (replace) | PUT    | /posts/1 | Complete updated version of post | The updated post         |
| Update (patch)   | PATCH  | /posts/1 | Partial updated version of post  | The complete update post |
| Delete           | DELETE | /posts/1 |                                  | Delete post              |

### Query Parameters

Get all users named Bret

```
GET /users?name=Bret
```

Get 3 page of posts, with 10 posts per page

```
GET /posts?_limit=10&_page=3
```

Get all posts sorted by title

```
GET /posts?_sort=title&_order=asc
```

For the full list of query parameters supported by the _json-placeholder_ api,
see <https://github.com/typicode/json-server>

### CRUD REST API Exercise

Use this fake api: https://jsonplaceholder.typicode.com/ and create the
following requests in Insomnia

1. Get all users
2. Get the photos for page 2 with 8 photos per page
3. Get the post with the id 42
4. Fetch the error returned when trying to get the post with the id 999
5. Create a new todo
6. Delete the todo with id 4
7. Update the todo with the id 4
8. Update only the completed status of the todo with the id 4
9. Do a full text search on the posts for the search term **dolor**

## Explore

Browse through these public api's, pick one and try to call it with insomnia.

https://github.com/public-apis/public-apis
