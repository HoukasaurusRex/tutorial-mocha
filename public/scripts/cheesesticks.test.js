const expect = require('expect')
const cheesesticks = require('./cheesesticks')

const orders = [
  'baozi',
  'russian cake',
  'dogmeat and cheese',
  'egg'
]

describe('MODULE cheesesticks', () => {
  it('should your orders with cheesesticks', (done) => {
    // const ordersWithCheeseSticks = cheesesticks(orders);
    // ordersWithCheeseSticks.forEach((order) => {
    //   expect(order).toContain('cheesesticks')
    // })
    cheesesticks(orders, (orderWithCheeseSticks) => {
      expect(orderWithCheeseSticks).toContain('cheesesticks')
    })
    done()
  })
})