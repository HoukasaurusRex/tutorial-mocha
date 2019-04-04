const expect = require('expect')
const insults = require('./insults')

/**
 * MODULE Insults
 */
// First describe the module you're testing
describe('MODULE Insults', () => {
  // Define what your test should return
  it('should return an insult', (done) => {
    // Here's where you use the expect module to evaluate the output of a function
    expect(insults(0)).toBe('Yous a bitch')
    /**
     * Challenge:
     * Test the other outputs from insults()
     */
    // Call done at the end since Mocha runs asynchronously
    done()
  })
})
