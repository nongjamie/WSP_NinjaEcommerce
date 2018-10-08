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
}
module.exports = Cart