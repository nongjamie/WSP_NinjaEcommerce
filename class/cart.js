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
            console.log('get cart by username error')
            return e.data
        }
        
    }
    async addProductToCartByUsername(username){
        try{
            const response = await axios.post(URL.getCartByUsername,{},{
                headers:{
                    'username': username,
                    'productID':username.productID,
                    'quantity':parseInt(username.quantity)
                }
            })
            return response.data
        }catch(e){
            console.log('post product to database error')
            return e.data
        }
        

    }
    async checkoutByUsername(username){
        try{
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
}
module.exports = Cart