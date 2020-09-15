# Authentication and Authorization

[JWT Reference](https://jwt.io/)

[Slides](https://reveal-viewer.netlify.app/?md=https://raw.githubusercontent.com/gabrielheinrich/ccl-lessons/master/firestack/authentication.md)

[Github Project Repository](https://github.com/gabrielheinrich/express-auth)

## Authentication Methods

- JWT (Stateless)
- Session (Server has list of logged in users and their tokens)
- OAuth (External authentication provider)

## JWT Basics

```bash
yarn add jsonwebtoken
```

```js
const jsonWebToken = require("jsonwebtoken");

// Create a jwt
const jwt = jsonWebToken.sign(
  { userId: 23, email: "rick@swif.ty" },
  "My Secret JWT Key"
);

// Decode a jwt
const payload = jsonWebToken.decode(jwt);

// Decode and verify the signature
const payload = jsonWebToken.verify(jwt, "My Secret JWT Key");
```

## Authenticated requests using Bearer Authorization header

```js
fetch("http://localhost:3000/posts", {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});
```

## Express Homemade Middleware

```js
const jwtProtected = (request, response, next) => {
  try {
    // Extract jwt from header "Authorization": "Bearer <JWT>"
    const header = request.headers.Authorization;
    const jwt = header.slice(header.indexOf(" ") + 1);
    // Verify jwt
    const user = jwt.verify(jwt, "My Secret JWT Key");
    // Store user decoded from jwt in request to make it accessible to the next controllers
    request.user = user;
    next();
  } catch {
    // No valid jwt: Unauthorized
    response.sendStatus(401);
  }
};
```

Alternative library: [passport-jwt](http://www.passportjs.org/packages/passport-jwt/)

## Check Questions

- What is the difference between a password and a token?
- How can an API protect itself against attacks?
- How does it work when you stay logged in on a website after a reload?
- What's the difference between Authentication and Authorization?
- What kinds of Authentication are there?
- Why are passwords hashed before they are stored in a database?
- Why is a JWT Authentication called stateless?
- Why do we want an expiration time on a JWT?
