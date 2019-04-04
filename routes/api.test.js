const request = require('supertest') // this dude is basically fetch with extra shit
const expect = require('expect') // this guy evaluates the returned values
const app = require('../app') // here's our boi we wanna get the routes from

const data = {
  thing1: 'im a thing',
  thing2: 'me too'
}
// First describe the route you're testing
describe('GET /data', () => {
  // Define what your test should return
  it('should return data', (done) => {
    request(app)
      .post('/data')
      .send(data)
      .expect(200)
      .then((res) => {
        // Here's where you use the expect module to evaluate the output of an api
        expect(res.body).toMatchObject(data)
        done() // always call done in mocha
      })
      .catch(done)
  })
})

/**
 * Challenge:
 * POST some data
 * expect it to not match different data
 */