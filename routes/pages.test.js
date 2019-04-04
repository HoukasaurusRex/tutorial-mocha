const request = require('supertest') // this dude is basically fetch with extra shit https://www.npmjs.com/package/supertest
const app = require('../app') // here's our boi we wanna get the routes from

// First describe the route you're testing
describe('GET /', () => {
  // Define what your test should respond with
  it('should respond with 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  })
})

/**
 * Challenge:
 * GET invalid page
 * expect 404
 */