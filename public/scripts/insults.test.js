const expect = require('expect') // this guy evaluates the returned values https://jestjs.io/docs/en/expect
const insults = require('./insults')

/**
 * MODULE Insults
 */
// First describe the module you're testing
describe('MODULE Insults', () => {
  // Define what your test should return
  it('should return yous a bitch', (done) => {
    // Here's where you use the expect module to evaluate the output of a function
    /**
     * Challenge:
     * Make this test pass
     */
    expect(insults(0)).toBe('Yous a bitch')
    expect(insults(1)).toBe('Yuh face look like a potat')
    /**
     * Challenge:
     * Test the other outputs from insults()
     */
    // Call done at the end since Mocha runs asynchronously
    done()
  })
})
