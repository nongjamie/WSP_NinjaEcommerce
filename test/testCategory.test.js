const Category = require('../class/category')
const category = new Category()

test('(Class: Cart)Test get category', async () => {
    const result = await category.getCategory();
    expect(result.data.return_code).toMatch('200');
});