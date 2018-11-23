const axios = require('axios')
const URL = require('../config/database')

class Customer{
    async updateCustomerInfo(data){
        try{
            console.log("customer paul")
            console.log(data)
            console.log(data.customerID)
            const response = await axios.post(URL.updateCustomerInfo,{},{
                headers:{
                    'customerID': data.customerID,
                    'name': data.name,
                    'phone':data.phone,
                    'address': data.address,
                    'gender' : data.gender,
                    'district': data.district,
                    'province':data.province,
                    'zipcode':data.zipcode,
                    'bday':data.bday
                }
            })
            return response.data
        }catch(e){
            return e.data
        }
        
    }
}

module.exports = Customer