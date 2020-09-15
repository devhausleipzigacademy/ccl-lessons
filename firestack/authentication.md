## Authentication

---

### Authentication vs Authorization

---

Authentication = Who are you?

Authorization = What are you allowed to do?

---

### Why do we need authentication?

---

### Why do we need authorization?

---

### Which data do we acutally have to keep private?

All of it?

---

### Sign-up & Sign-in

---

### Token-Based Authentication

- The backend owns a secret key <!-- .element: class="fragment" -->
- That secret key is used to create tokens that can be validated <!-- .element: class="fragment" -->
- On authentication (email + password) a user receives their token <!-- .element: class="fragment" -->
- The user keeps that token private and sends it along with every request <!-- .element: class="fragment" -->

---

### JWT

Javascript Web Tokens

Defacto standard

---

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

#### Header

Base64URL encoded JSON

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

---

#### Payload

Also called claim

```
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
```

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

---

#### Signature

```
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

The header + the payload get encoded using the algorithm specified in the header and a **private secret**

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

---

The signature can be **validated** and makes sure that the payload wasn't changed and the user is who they claim to be.

---

### How do we attach the token to a request?

---

### HTTP Header

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

### OAuth

Login with Google, GitHub, Facebook, etc...

---

We can rely on some other service to protect a users identity.

We can then use that identity and run our own authorization on top.

---

### Session-Based Authentication

Server keeps track of logged in users

---

### Session-Based Authentication

- The server keeps a store of all currently active sessions and their tokens.
- On authentication (email + password) the server creates a new session token and
  sets it as a cookie to the user. <!-- .element: class="fragment"
  -->
- Because it is a cookie the browser will automatically send it along with every
  upcoming request <!-- .element: class="fragment" -->
- The server can use its internal session store to validate if a token belongs
  to an active session. <!-- .element: class="fragment" -->

---

### Benefits

- Always up to date
- Simpler setup on the frontend

---

### Drawbacks

- The session store can become a bottleneck
