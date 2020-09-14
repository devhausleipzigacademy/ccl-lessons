# Software Testing

---

## Why do we need tests?

---

##### Why do we need tests?

## There's no other way to proof a program is working

---

### Additional Benefits

- Testable code is composable <!-- .element: class="fragment" -->
- Confidence to experiment with code <!-- .element: class="fragment" -->
- Tests are built-in code documentation <!-- .element: class="fragment" -->

---

#### Kinds of Testing

## Manual Testing

## Unit Testing

## Integration Testing

## End to End Testing

---

## Manual Testing

- Done by developer / tester
- Manual work
- Unreliable
- But no setup needed

---

## Unit Testing

- Automated scripts that test functions in isolation
- Catch bugs early and close to their actual source
- Necessary for robustness

---

## End to End / Integration Testing

- Automated tests that test connected components or the complete application
- Good for catching the really expensive bugs

---

#### Guideline

### Use different methods of testing in **combination** for maximum test efficency

### Start with E2E

---

### Costs of testing

- Every external dependency has to be mocked <!-- .element: class="fragment" -->
- For simple apps > 50% of development time <!-- .element: class="fragment" -->
- UIs are inherently harder to test <!-- .element: class="fragment" -->
- A test suite increases the costs of changes, because more code has to be rewritten <!-- .element: class="fragment" -->

---

### What to test

#### Input

Input arguments and environment

#### Output

Return values and side effects

---

### What not to test

Don't test libraries you are using

Don't test the specifics of the implementation

Test **what** a function does not **how** it does it

---

#### Defense strategy

## Every bug found in production becomes a new unit test

---

#### Aside

## Exhaustive testing is impossible

### Why?

---

# Unit Testing Workflow

---

#### Unit Testing Workflow

For every source code file there's a test file <!-- .element: class="fragment" -->

The test file imports the functions to be tested from the source code file <!-- .element: class="fragment" -->

In every test case we call one of the imported functions with test inputs and check the outputs <!-- .element: class="fragment" -->

Execute test runner from the command line <!-- .element: class="fragment" -->

---

#### Gold Standard of Software Development

# Test Driven Development

---

#### Rule

## No implementation may be written unless there's a failing test case.

---

### Benefits

- Think before you code <!-- .element: class="fragment" -->
- Automatic documentation / specification of every feature <!-- .element: class="fragment" -->
- Double checking: Implementation checks tests, tests check implementation <!-- .element: class="fragment" -->
- Close to bug free from day one <!-- .element: class="fragment" -->

---

#### Drawbacks

- Requires more initial effort <!-- .element: class="fragment" -->
- Testing is sometimes harder than writing the implementation <!-- .element: class="fragment" -->

---
