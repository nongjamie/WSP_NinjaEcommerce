const Order = require('../class/order')
const order = new Order()

test("(Class: Order)Test get order list", async () => {
    const result = await order.getOrderList()
    expect(result.return_code).toMatch("200")
  }, 30000)