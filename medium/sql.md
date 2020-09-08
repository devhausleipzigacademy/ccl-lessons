# Databases & SQL

---

# Why do we even need a database?

---

#### Job of a database

### Store data for a long time <!-- .element: class="fragment" -->

### Gurantee that data is valid <!-- .element: class="fragment" -->

### Search stored data and return it quickly <!-- .element: class="fragment" -->

---

#### Strenghts of a database

### Persistence <!-- .element: class="fragment" -->

### Integrity <!-- .element: class="fragment" -->

### Efficiency <!-- .element: class="fragment" -->

---

#### What is a database?

### It's a server <!-- .element: class="fragment" -->

### Reads/Writes files <!-- .element: class="fragment" -->

#### Every database system has its own protocol for requests and responses <!-- .element: class="fragment" -->

<small class="fragment">Not HTTP/HTTPS</small>

---

#### Kinds of Databases

### Relational (SQL) <!-- .element: class="fragment" -->

### No SQL / Document Storage (MongoDB, Firestore) <!-- .element: class="fragment" -->

### Key Value Stores (Redis) <!-- .element: class="fragment" -->

We are going to focus on relational databases using SQL <!-- .element: class="fragment" -->

---

#### SQL Databases

### sqlite

### MySQL

### Postgres

### MariaDB

All pretty similar

---

# Mental Model

---

### Excel metaphor

#### An sql database is like an Excel document

<ul>
  <li class="framgent">A <strong>database</strong> is made up of individual tables</li>
  <li class="framgent">Each <strong>table</strong> has a set of columns, called its schema</li>
  <li class="framgent">All data is stored as <strong>rows</strong> in those tables</li>
</ul>

---

### SQL Operations

- Create an empty table and its column schema <!-- .element: class="fragment" -->
- Insert rows <!-- .element: class="fragment" -->
- Search / Query for rows <!-- .element: class="fragment" -->
- Update rows <!-- .element: class="fragment" -->
- Delete rows <!-- .element: class="fragment" -->

---

# CREATE TABLE

---

```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title varchar(255) UNIQUE NOT NULL,
  date datetime NOT NULL,
  location varchar(255),
  details text
);
```

---

# INSERT

Add values

---

```sql
INSERT INTO events (title, date, location, details) VALUES (
    'Pair Programming',
    '05/16/2020 15:00',
    'Zoom Room',
    'Topic: Object Oriented Programming'
  );
```

---

# SELECT

Get table rows

---

Get all events

```sql
SELECT * FROM events;
```

Get the id, date and location of all events

```sql
SELECT id, date, location FROM events;
```

---

Keywords and identifiers are case insensitive

```sql
SELECT * FROM events;
```

```sql
select * from EVENTS;
```

```sql
SelECT * FroM evENtS;
```

---

Sorting and pagination

```sql
SELECT * FROM events
ORDER BY date DESC
LIMIT 10 offset 30;
```

---

# WHERE

The big filter

---

Get event with id 42

```sql
SELECT * FROM events WHERE id = 42;
```

---

Get all events that mention Javascript in their details

```sql
SELECT * FROM events WHERE details LIKE %Javascript%
```

---

# Delete & Update

---

Delete an event

```sql
DELETE FROM events WHERE id = 42;
```

Update an event

```sql
UPDATE events SET title = 'Kata Session' WHERE id = 42;
```

---

# PRIMARY KEY

- Every row in a database gets a unique id called the primary key <!-- .element: class="fragment" -->
- This id can be used in other tables to refer to this row <!-- .element: class="fragment" -->
- That's how relationships grow... <!-- .element: class="fragment" -->

---

#### Kinds of Relationships

### One to One

User Kata Scores

### One to Many

Event Creator

### Many to Many

Event Attendees

---

### What kind of relationship is this?

- Friends of user
- Tags of an event
- Event Template
- Comments on an event

---

### How are one to one relationships implemented?

User Kata Scores

---

### How are one to many relationships implemented?

Event Creator

---

### How are many to many relationships implemented?

Event Attendees

---

### Intermediary Tables

```sql
CREATE TABLE event_attendees (
  event_id INTEGER REFERENCES events(id),
  attendee_id INTEGER REFERENCES users(id),
  PRIMARY KEY(event_id, attendee_id)
)
```

<small>event_id and attendee_id are called <strong>FOREIGN KEYs</strong></small>
<small>FOREIGN because they refer to another table</small>

---

# JOIN

- Tables can be joined in a query <!-- .element: class="fragment" -->
- A new transient table is created where the columns of both tables are present <!-- .element: class="fragment" -->
- The rows are filled with contents of both tables using an intermediary table to match ids <!-- .element: class="fragment" -->

---

Get attendees for event 5

```sql
SELECT users.name users.email FROM event_attendees
  LEFT JOIN users on users.id = attendee_id
  WHERE event_id = 5
```

---
