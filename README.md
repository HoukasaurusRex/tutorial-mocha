# Mocha Basics

*Unit testing for functional programming*

## Overview
  - Mocha is a cli tool and framework for testing javascript functions by calling the function and evaluating the result using testing libraries like supertest, jest, etc.
  - Unit testing is done in almost every enterprise-level corporation to produce more robust functions and prevent regressions (of which we have A-FUCKING LOT).
  - Currently, we are testing our express routes in routes/*.test.js to make sure the APIs we write won't break with any new updates to them (of which, we also have a lot)
  - YOU, the humble developer... yes YOU have the power to prevent any other developer from breaking your beautiful new functions by writing front-end or back-end tests to them to ensure they continue to do that wonderful thing you programmed them to do

## Scope of Material
  - What is unit testing
  - What mocha is
  - How to use testing libraries in mocha
  - How to write tests for modules
  - How to write tests for express routes

## Prerequisites
  - Basic knowledge of git
  - Basic knowledge of node
  - Basic knowledge of express
  - Basic knowledge of es modules

## Index
  1. Clone repository from url
  2. Install dependencies
  3. Run app
  4. Run tests
  5. Pass tests
  6. Extend tests
  7. Create new tests

## Steps

  - ### Clone repository from url
    ```sh
    git clone https://github.com/Pterobyte/tutorial-mocha.git
    ```
    This is a basic express app I've made just for running mocha
    The file directory is following express standards
    ```js
    📂bin
        www // server root
    📂public // the public directory sent to client
      📁images
      📂scripts
          insults.js // module we'll test
          insults.test.js // test file for module
      📁styles
      📁views
    📂routes
        api.js // our api router
        api.test.js // api tests
        pages.js // our page router
        pages.test.js // page tests
    app.js // standard express app config
    ```
  - ### Install Dependencies
    ```sh
    npm install
    ```
    Notice our testing libraries are devDependencies, since they are usually not needed in production environments and will be swept out of node_modules by running `npm install --production`
  - ### Run app
    ```sh
    npm start
    ```
    The app should be listening at http://localhost:3000
  - ### Run tests
    Exit the server with ^c then run
    ```sh
    npm test
    ```
    Now you'll see some fun looking output in your console. Here mocha is outputting the results of the tests in all the *.test.js files in our project.
    In short, it tells you...
      - whether the test passed or failed
      - the time it took to run a test
      - the reasons for a failed test
  - ### Pass a test
    Let's start in public/scripts/insults.test.js
    ```js
    const expect = require('expect') // this guy evaluates the returned values https://jestjs.io/docs/en/expect
    const insults = require('./insults')

    // First describe the module you're testing
    describe('MODULE Insults', () => {
      // Define what your test should return
      it('should return an insult', (done) => {
        // Here's where you use the expect module to evaluate the output of a function
        expect(insults(1)).toBe('Yous a bitch')
        // Call done at the end since Mocha runs asynchronously
        done()
      })
    })
    ```
    This test is really only doing two things:
      1. requiring the js module you're testing at the top
      2. using the expect library from Jest to check it's returned values
    
    And that's all a unit test really is. You're extracting a unit out of your project and testing it to make sure it still does what you expect it to do.
    Now, astute developer, you might have noticed this test is the failing test, so let's change that. Change the value passed into insults() to make this test pass.
    Use insults.js to figure out what value should be passed in, then rerun `npm test` to see if it's working
    
  - ### Extend tests
    Now you've got a handle on testing a little bit, try completing the challenges:
      1. insults.test.js ==> test the other outputs from insults.js
      2. pages.test.js ==> test a page that doesn't exist
      3. api.test.js ==> test the api to make sure it's not returning wrong data
    
  - ### Create new tests
    That's mocha in a nutshell, now you can get nasty with some new shit.
    For the last thing...
      1. write a new es module in public/scripts
      2. write a new test file requiring the module
      3. test the output of the module in your test file using expect
    OR (if you're a node guy)
      1. write a new express route (make it an api, not a page you basic bitch)
      2. make the route manipulate the data (math or something)
      3. send the new data back in a predictable way (it always adds 1 or something)
      4. write a test file for your api
      5. require the express app, expect, and supertest
      6. test the api with a few different requests to make sure the data coming back is legit

## Further Learning
  - [Mocha Docs](https://mochajs.org/)
  - [Expect · Jest](https://jestjs.io/docs/en/expect)
  - [supertest - npm](https://www.npmjs.com/package/supertest)