# Code smells
List of common issues on the example of the Javascript + Cypress.io

## 1 - Test issues
### 1 - content and structure 
1. lack of/bad assertions
1. brittle selectors (not using unique id/class or selecting by text/appearance)
1. test is too long & does too many things
1. test name mismatch with reality

### 2 - efficiency
1. duplicated code
1. redundant tests (form of duplication)
1. wrong layer of the test pyramid (should've been a unit test)
1. explicit HTML element waits

## 2- Generic Programming Language issues
1. bad variable names
1. comments
1. deep nesting/indentation
1. copy-pasted code
1. too long
1. too many

## 3 - Nitpicks
1. spacing between tests/describes
1. lack of consistency
