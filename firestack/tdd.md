# Test Driven Development

[Assertions](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions)

[Slides](https://reveal-viewer.netlify.app/?md=https://raw.githubusercontent.com/gabrielheinrich/ccl-lessons/master/firestack/testing.md)

## Javascript Testing Frameworks

### General Unit Testing

- Jest
- Mocha / Chai

### Frontend DOM Testing

- Testing Library: <testing-library.com>

### E2E Testing

- Cypress

## Cypress Setup

```bash
yarn add -D cypress
yarn cypress open
```

## Cypress Basics

```js
describe("My Test Suite", () => {
  it("should to addition", () => {
    expect(1 + 1).to.be.eq.(2);
  })
})
```

Running db seeds before each test

```js
beforeEach(() => {
  cy.exec("yarn knex seed:run");
});
```

Testing an API endpoint

```js
it("should return a single plant", () => {
  cy.request("http://localhost:3000/plants/1").should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).property("name").to.be.eq("Cactus");
  });
});

// Using .its and .should instead of expect
it("should create a new plant", () => {
    cy.request("POST", "http://localhost:3000/plants", {
      name: "Palm", ownerId: 1
    }).its("body").should("have.property", "name").and("eq", "Palm")
}
```

Testing a UI

```js
it("should display all plants", () => {
  cy.visit("http://localhost:8080/plants");
  cy.get("h2").contains("Cactus").should("exist");
});
```

## Check Questions

- What's the difference between Integration Testing and E2E Testing
- What is the main rule behind Test Driven Development. What's the reasoning
  behind it?
- Why is it impossible to proof that a program doesn't have any bugs using tests?
- Name some benefits and drawbacks of using Test Driven Development
