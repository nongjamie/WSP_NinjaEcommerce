const axios = require('axios')
const URL = require('../config/database')

class Order {
  async getOrderByOrderID(orderID) {
    console.log('order IDDDddddddd')
    console.log(orderID)
    try {
      const response = await axios.post(
        URL.getOrderByOrderID,
        {},
        {
          headers: {
            orderID: orderID
          }
        }
      )
      return response.data
    } catch (error) {
      return error.data
    }
  }
  async getOrderList() {
    try {
      const response = await axios.get(URL.getOrderList)
      return response.data
    } catch (error) {
      return error.data
    }
  }
  async updateOrderStatus(data) {
    try {
      const response = await axios.post(
        URL.updateOrderStatus,
        {},
        {
          headers: {
            orderID: data.orderID,
            orderStatus: data.orderStatus
          }
        }
      )
      return response.data
    } catch (error) {
      return error.data
    }
  }
  async removeOrder(orderID) {
    try {
      const response = await axios.post(
        URL.removeOrder,
        {},
        {
          headers: {
            orderID: orderID
          }
        }
      )
      return response.data
    } catch (error) {
      return error.data
    }
  }
}

module.exports = Order
