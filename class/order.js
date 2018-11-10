const axios = require('axios')
const URL = require('../config/database')

class Order{
    async getOrderList(){
        try {
            const response = await axios.get(URL.checkoutByUsername)
            return response.data
        } catch (error) {
            return error.data
        }
    }
}

module.exports=Order