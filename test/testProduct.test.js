const Product = require("../class/product")
const product = new Product()

test("(Class: Product) Get product by category", async () => {
  const category = ["Whisky", "Beer", "Wine", "Mixer"]
  category.forEach(async c => {
    let result = await product.getCategoryByName(c)
    expect(result.return_code).toMatch("200")
  })
}, 100000)

test("(Class: Product) Add product to cart", async () => {
  const data = {
    username: "TestAccount8",
    productID: "4JbTehkukn42UPXr0H9c",
    quantity: 1
  }
  const result = await product.addProductToCart(data)
  expect(result.return_code).toMatch("200")
}, 30000)

test("(Class: Product) Search product by name", async () => {
  const keyword = "Mixer"
  const result = await product.searchProductByName(keyword)
  expect(result.orderID)
  expect(result.return_code).toMatch("200")
}, 30000)
