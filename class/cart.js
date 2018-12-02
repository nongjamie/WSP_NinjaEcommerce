const axios = require('axios')
const URL = require('../config/database')

class Cart {
    async getUserCart(username){
        try{
            const response = await axios.post(URL.getCartByUsername,{},{
                headers:{
                    'username': username,
                }
            })
            return response.data
        }catch(e){
            return e.data
        }
        
    }
    async checkoutByUsername(username){
        try{
            console.log('paul    '+username)
            const response = await axios.post(URL.checkoutByUsername,{},{
                headers:{
                    'username': username,
                }
            })
            return response.data
        }catch(e){
            return e.data
        }
    }
    async removeProductFromCart(data){
        try{
            const response = await axios.post(URL.removeProductFromCart,{},{
                headers:{
                    'username': data.username,
                    'productID': data.productID,
                    'quantity':parseInt(data.quantity)
                }
            })
            return response.data
        }catch(e){
            return e.data
        }
    }
}
module.exports = Cart