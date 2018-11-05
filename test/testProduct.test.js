const Product = require('../class/product')
const product = new Product()

test('(Class: Product) Get product by category', async () => {
    
    const category = ['Whisky','Beer','Wine','Mixer']
    category.forEach(async(c) => {
        let result = await product.getCategoryByName(c)
        expect(result.return_code).toMatch('200');
    });
},20000);


test('(Class: Product) Get product by category', async () => {
    const data = {
        username : 'hereton',
        productID : '4JbTehkukn42UPXr0H9c',
        quantity : 1,
    }
    const result = await product.addProductToCart(data)
    expect(result.return_code).toMatch('200');
},20000);
