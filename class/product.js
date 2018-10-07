const axios = require('axios')
const URL = require('../config/database')
class Product {
    async getProductList(){
        try {
            const response = await axios.get(URL.getProductList)
            return response.data
        } catch (error) {
            console.log('get product list error')
            console.log(error)
            return error.data
        }
    }

    async getCategory(){
        try {
            const response = await axios.get(URL.getCategory)
            return response
        } catch (error) {
            console.log('get category error')
            console.log(error)
            return error
        }
    }
}

module.exports = Product