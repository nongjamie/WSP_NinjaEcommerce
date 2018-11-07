const Cart = require('../class/cart')
const cart = new Cart()
const Product = require('../class/product')
const product = new Product()


test('(Class: Cart)Test get user cart', async () => {
    const data  = {
        username : 'TestAccount8'
    }
    const result = await cart.getUserCart(data);
    expect(result.return_code).toMatch('200');
});


test('(Class: Cart)Test remove product from cart', async () => {
    const data = {
        'username': 'TestAccount8',
        'productID': '4JbTehkukn42UPXr0H9c',
        'quantity': 1
    }
    product.addProductToCart(data)
    const result = await cart.removeProductFromCart(data)
    expect(result.return_code).toMatch('200');
})

test('(Class: Cart)Test check out', async () => {
    const data1 = {
        'username': 'TestAccount8',
        'productID': '4JbTehkukn42UPXr0H9c',
        'quantity': 1
    }
    product.addProductToCart(data1)
    const result = await cart.checkoutByUsername('TestAccount8')
    expect(result.return_code).toMatch('200');
},20000)
