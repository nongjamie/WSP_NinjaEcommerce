const Cart = require('../class/cart')
const cart = new Cart()

test('(Class: Cart)Test get user cart', async () => {
    const data  = {
        username : 'varit'
    }
    const result = await cart.getUserCart(data);
    expect(result.return_code).toMatch('200');
});

test('(Class: Cart)Test check out', async () => {
    const data = {
        username: 'varit',
     }
    const result = await cart.checkoutByUsername(data)
    expect(result.return_code).toMatch('200');
})

test('(Class: Cart)Test remove product from cart', async () => {
    const data = {
        'username': 'varit',
        'productID': '4JbTehkukn42UPXr0H9c',
        'quantity': 1
    }
    const result = await cart.removeProductFromCart(data)
    expect(result.return_code).toMatch('200');
})
