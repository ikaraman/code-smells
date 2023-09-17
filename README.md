# Purpose
This is a repo that has some tests written in Cypress.io framework. These tests were deliberately written to have some issues.
This is done `intentionally`, for training purposes. 

Goal is to learn how to `identify issues in test code`.

> Note that cheat sheet and sample tests are not necessarily have 1-1 relationship. Some will appear more than once, some will not be there at all. 

# How to
To use this repo you need to do several steps:  
1. open the `awesome.test.cy.js` test file located in `./cypress/e2e` folder
1. open the `cheat-sheet.md` file for code smell examples.
1. try to find as many issues with the tests as possible

To track the issues use the following format
- line number
- cheat sheet item id, use `number-dot-number-dot` format (like `1.2.1`) 
- short description to explain why do you think this is an issue

For example:
> Line 1, 1.1.1, This needs an example  
> Line 2, 3.2.1, It has two lines but should have one?

# Is it even helpful?
The choice is yours! 
You can look at this exercise as a model of real life situation when someone just `created a Pull Request` with these tests.
Now you need to `provide some meaningful feedback` for them.  
