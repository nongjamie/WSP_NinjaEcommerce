const axios = require('axios')
const URL = require('../config/database')

class Category{
    async getCategory(){
        try {
            const response = await axios.get(URL.getCategory)
            return response
        } catch (error) {
            return error
        }
    }
}

module.exports=Category