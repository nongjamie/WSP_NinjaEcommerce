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
        } catch (error) {
            console.log('error')
            return error.data
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
    async searchProductByName(productName){
        try{
            const response = await axios.post(URL.searchProductByName,{},{
                headers:{
                    'keyword': productName
                }
            })
            return response.data
        }catch(e){
            return e.data
        }
    }
    async addProduct(item) {
        try {
            console.log(item)
            const response = await axios.post(URL.addProduct, {}, {
                headers: {
                    'name' : item.name,
                    'price' : item.price,
                    'detail' : item.detail,
                    'categoryID' : item.categoryID,
                    'country': item.country,
                    'abv': item.abv,
                    'distributor': item.distributor,
                    'imgUrl': item.imgUrl,
                    'vol': item.vol
                }
            })
            return response.data
        } catch (error) {
            return error.data
        }
    }
}
module.exports = Product