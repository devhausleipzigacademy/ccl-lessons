## My Software Development Method

---

# # 1

### Start with a marketing poster

---

- **Tagline** : What's your mission?
- **Feature List**: Top ~6, heading + 1-2 sentences
- **Visual Identity**: Make it pretty

---

# # 2

### Create example data

---

- Every application is dealing with information
- Think about the information that your application will handle
- Make the examples realistic, varied and personal

---

# # 3

### Analyse the Interactions

---

- Think about the key interactions.
- List the steps / possibilities for different outcomes.
- What data will flow through these steps?
- What's the timing sequence / coordination?

---

# # 4

### Draw the UI

---

- Start with pen and paper
- Find the larger structure / pages
- Build out some pages in a design software like figma / sketch

---

# # 5

### Be an architect

---

- Come up with a structure that is capable of implementing the interaction mechanics
- Draw a plan
- Find the components

---

#### Components

- Can they be implemented independently?
- What are their jobs?
- On which machine / which runtime will they be running?
- What information will they expect and send out?
- How will they be started and stopped?
- How can they be tested?

---

# # 6

### Create a comfortable development setup

---

- Do it early, you'll save time while working
- Git Repositories, branching strategy
- Documentation (Both official and within the team)
- Communication channels
- Tools: Code Formatting, Testing, Debugging
- Goal: Feeling you have everything you could need to support you

---

# # 7

### Build a skeleton

### Establish connections

---

- Create the components, but leave them empty
- Make sure they can talk to each other
- Mock out the triggers and data flows for the key interactions
- Tip: End to End test that the data is actually reaching its destination (unfortunately very hard to setup)

---

# # 8

### Deploy ASAP

---

- Deployment / Delivery is hard
- You might find out about key problems in your design
- Don't do it close to the deadline
- Continous Delivery is the goal

---

# # 9

### Build a detailed fake UI

---

- UI Driven Development
- Don't shy away from details
- Button's wont do anything
- Display static example data
- Make it look good
- It seems like a waste to do this early, but it most likely isn't

---

# # 10

### Pick one part and finish it

### Then repeat

---

- Flesh features out one by one
- Finish them
- Don't leave TODO's behind
- Add documentation
- Write the unit / integration tests that will let you sleep soundly at night
- You should be able to feel proud of each part you have completed

---

# # 11

### Do Refactoring Sessions

---

- Writing perfect code line by line from the start is to slow.
- Instead have sessions purely dedicated for cleanup and refactoring, where you are focused on nothing but code quality
- You need git and unit tests for this
- Sometimes rewriting from scratch is necessary, but it's a last resort and shouldn't be underestimated

---

# # 12

### Prepare for Release

---

- Conciously plan for this step, it's going to be necessary
- Polishing, proof reading, etc...
- Have a check list

---

1. Start with a Marketing Poster
2. Create Example Data
3. Analyse the interactions
4. Draw the UI
5. Be an architect
6. Create a comfortable development setup
7. Build a skeleton & establish connections
8. Deploy ASAP
9. Build a detailed fake UI
10. Pick one part and finish it, then repeat
11. Do refactoring sessions
12. Prepare for release
