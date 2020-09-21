# Firestack

## Resources

[Firebase API](https://firebase.google.com/docs/reference/js)

[Firebase Guides](https://firebase.google.com/docs/guides)

## Stack

- Firebase
  - Authentication
  - No SQL Realtime Database
  - Serverless Functions
  - File Storage
  - Hosting
- Vue & Vuefire
- Tailwind CSS
- Cypress E2E Testing

## Setup

```bash
git init
```

### Firebase

- Install firebase cli
- Create a firebase project on firebase.google.com
  - enable auth, etc...

```bash
firebase login
firebase init
# Select all features
```

### Vue, Cypress & Tailwind

```bash
vue create frontend
# Select vuex, router and e2e
cd frontend
vue add tailwind
yarn add vuefire vuexfire
```

### Configuration

firebase.js

```js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD43CWRoDIOjeSA_9wR-8YLsPJJ-aXPIGg",
  authDomain: "playground-ccl-2.firebaseapp.com",
  databaseURL: "https://playground-ccl-2.firebaseio.com",
  projectId: "playground-ccl-2",
  storageBucket: "playground-ccl-2.appspot.com",
  messagingSenderId: "730856679896",
  appId: "1:730856679896:web:3479502016b62f5c08eaad",
};

firebase.initializeApp(firebaseConfig);

if (location.hostname === "localhost") {
  firebase.firestore().settings({
    host: "localhost:8081",
    ssl: false,
    experimentalForceLongPolling: true,
  });

  firebase.functions().useFunctionsEmulator("http://localhost:5001");
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
```

### Usage

```js
import { auth, db, storage } from "@/firebase.js";
```

### vuefire

```js
yarn add vuefire
```

main.js

```js
import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);
```

Home.vue

```js
export default {
  data() {
    return {
      posts: [],
    };
  },
  firestore: {
    todos: db.collection("todos"),
  },
};
```

### Authentication

```js
auth.onAuthStateChanged((user) => {
  store.commit("SET_USER", user);
});
```

### Firestore

#### Adding a new document

```js
db.collection("posts").add({
  text: "My new post",
  user: auth.currentUser.uid,
});
```

#### Querrying the database

```js
const snapshot = await db
  .collection("posts")
  .where("user", "==", auth.currentUser.uid);
snapshot.
```

### File Upload

```html
<input type="file" ref="fileInput" />
```

```js
const imgFile = this.$refs.fileInput.files[0];
const storageRef = storage.ref();
const snapshot = await storageRef
  .child(imgFile.name)
  .put(imgFile, { user: auth.currentUser.uid });

downloadUrl = await snapshot.ref.getDownloadURL();
```

### Security Rules

```js
service cloud.firestore {
  match /databases/{database}/documents {
    // Make sure the uid of the requesting user matches name of the user
    // document. The wildcard expression {userId} makes the userId variable
    // available in rules.
    match /users/{userId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
  }
}
```

#### Emulators

```bash
firebase emulators:start
```
