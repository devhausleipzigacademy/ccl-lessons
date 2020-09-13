# Databases

## Resources

[SQLite Browser](https://sqlitebrowser.org/)

[SQL Language Reference](https://www.sqlitetutorial.net/)

[Slides](https://reveal-viewer.netlify.app/?md=https://raw.githubusercontent.com/gabrielheinrich/ccl-lessons/master/firestack/sql.md)

## Types of databases

#### SQL Databases

- Postgres
- MySQL
- SQLite
- MariaDB

#### NoSQL Databases

- MongoDB
- Firestore
- DynamoDB

#### Other

- Redis (Key Value Store for Caching)
- Cassandra (Column Store)
- noe4j (Graph)
- Elastic Search

## SQL Snippets

```sql
CREATE TABLE events (
  id integer PRIMARY KEY AUTOINCREMENT,
  title varchar(255) UNIQUE NOT NULL,
  date datetime NOT NULL,
  location varchar(255),
  details text
);
```

```sql
INSERT INTO events (title, date, location, details) VALUES (
    'Pair Programming',
    '05/16/2020 15:00',
    'Zoom Room',
    'Topic: Object Oriented Programming'
  );
```

```sql
SELECT * FROM events;

SELECT id, date, location FROM events;

SELECT * FROM events
ORDER BY date DESC
LIMIT 10 offset 30;

SELECT * FROM events WHERE id = 42;
SELECT * FROM events WHERE details LIKE "%Javascript%"
```

```sql
UPDATE events SET title = 'Kata Session' WHERE id = 42;
```

```sql
DELETE FROM events WHERE id = 42;
```

```sql
SELECT users.name users.email FROM event_attendees
  LEFT JOIN users on users.id = attendee_id
  WHERE event_id = 5
```

```sql
CREATE TABLE event_attendees (
  event_id INTEGER REFERENCES events(id),
  attendee_id INTEGER REFERENCES users(id),
  PRIMARY KEY(event_id, attendee_id)
)
```

## Exercises

Setup a database schema for the following examples. Then insert some example
data and run queries.

1. User Authentication
   - Signup user with email username and password
   - Find user by email address
   - Update user username
   - Delete user
2. ToDo App (Google Keep)
   - Create ToDo
   - Get latests 5 todos
   - Get todos from yesterday
   - Mark a todo as done
   - Search for todos containing a specific word
3. Articles with comments (Medium)
   - Create an article
   - Add a comment to an article
   - Get all comments for a given article
   - Delete all comments by a specific user
   - Delete an article and its comments
4. Likes on Images (Instagram)
   - Post a new image
   - Add a like for an image
   - Get all images liked by a specific user
   - Delete a like from an image
   - Get most liked images
   - Get images that have been recently liked
5. Friends with messages (Facebook)
   - Create users
   - Mark two users as friends
   - Get all friends for a user
   - Send a message from a user to another user
   - Get all messages send to a user that are unread
   - Mark a message as read
   - Update a message text
   - Get the last 10 messages send (globally)
   - Get users ordered by number of friends
   - Get messages send to most popular users
6. Matches for dating (Tinder)
   - Create users with profiles
   - Mark that a user likes/dislikes another user's profile
   - Get all profiles a user hasn't rated yet (research EXISTS)
   - Get all profiles that a user hasn't rated yet, but would match their preferences
   - Find all matches for a given user
   - Get the most liked users (research GROUP_BY and COUNT)

## Check Questions

- What is a Database Schema?
- What is a Primary Key and what is a Foreign Key?
- What are the differences between a SQL and a NoSQL Database?
- What's an intermediary table? In which scenario is it necessary?
