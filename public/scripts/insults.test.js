const expect = require('expect') // this guy evaluates the returned values https://jestjs.io/docs/en/expect
const insults = require('./insults')

/**
 * MODULE Insults
 */
// First describe the module you're testing
describe('MODULE Insults', () => {
  // Define what your test should return
  it('should return an insult', (done) => {
    // Here's where you use the expect module to evaluate the output of a function
    /**
     * Challenge:
     * Make this test pass
     */
    expect(insults(1)).toBe('Yous a bitch')
    /**
     * Challenge:
     * Test the other outputs from insults()
     */
    // Call done at the end since Mocha runs asynchronously
    done()
  })
})
