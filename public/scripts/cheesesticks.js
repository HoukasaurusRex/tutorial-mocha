/**
 * Order with Cheesesticks
 * improving orders to always give you that sweet sweet cheeeeese sticks
 */
/**
 * ['burger', 'fries', 'hat', 'wild ugandan coffee from uganda']
 */
module.exports = (orders, callback) => {
  // const ordersWithCheeseSticks = [];
  orders.forEach(order => {
    callback(`${order} with cheesesticks`)
  })
  // return ordersWithCheeseSticks;
}