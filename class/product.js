const axios = require('axios')
const URL = require('../config/database')

class Product {
    async getCategoryByName(category) {
        try {
            const response = await axios.post(URL.getProductListByCategoryname, {}, {
                headers: {
                    'categoryName': category,
                }
            })
            return response.data
        } catch (e) {
            return e
        }

    }

    async addProductToCart(item) {
        try {
            const response = await axios.post(URL.addProductToCartByUsername, {}, {
                headers: {
                    'username': item.username,
                    'productID': item.productID,
                    'quantity': item.quantity,
                }
            })
            return response.data
        } catch (error) {
            return error.data
        }
    }
}
module.exports = Product