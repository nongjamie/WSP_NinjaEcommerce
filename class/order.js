const axios = require('axios')
const URL = require('../config/database')

class Order {
    async getOrderByOrderID(orderID){
        try {
            const response = await axios.post(URL.getOrderByOrderID, {}, {
                headers:{
                    'orderID' : orderID
                }
            })
            return response.data
        } catch (error) {
            return error.data
        }
    }
    async getOrderList(){
        try {
            console.log('paul')
            const response = await axios.get(URL.getOrderList)
            console.log('paul2')
            console.log(response.data)
            return response.data
        } catch (error) {
            return error.data
        }
    }
    async updateOrderStatus(data){
        try {
            const response = await axios.post(URL.updateOrderStatus, {}, {
                headers:{
                    'orderID' : data.orderID,
                    'orderStatus': data.orderStatus   
                }
            })
            return response.data
        } catch (error) {
            return error.data
        }
    }
}

module.exports = Order