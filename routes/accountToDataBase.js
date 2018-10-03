const axios = require('axios')

class Account {
    constructor(){
        this.URL = 'https://us-central1-ninjadrink-25671.cloudfunctions.net/'
    }
    async getList() {
        try {
            const response = await axios.get(this.URL + 'getAccountList')
            return response
        } catch (error) {
            console.log('get account list error')
            console.log(error)
            return error
        }
    }
    async add(account) {
        try {
            console.log('=====add method======')
            console.log(account)
            const response = await axios.post(this.URL + 'addAccount',{},{
                headers:{
                    username: account.username,
                    password: account.password,
                    email: account.email,
                    name: account.name,
                    gender: account.gender,
                    bday: account.bday,
                    address: account.address,
                    province: account.province,
                    district: account.district,
                    zipCode: parseInt(account.zipCode),
                    phone: account.telephone
                }
            })
            console.log('Response' + response.data)
            return response.data
        } catch (error) {
            console.log('Post account to database error')
            return error.data
        }
    }
    async login(account) {
        try {
            console.log(account)
            console.log(account.username)
            const response = await axios.post(this.URL + 'login',{},{
                headers:{
                    'username': account.username,
                    'password': account.password
                }
            })
            return response.data
        } catch (error) {
            console.log('Login error')
            console.log(error.data)
            return error.data
        }
    }
    async getAccountBy(username){
           
       try { const response = await axios.post(this.URL+'getAccountByUsername',{},{
                headers:{
                    'username': username
                }
            })
            return response.data
        }catch(error){
            return error.data
        }
    }

}

module.exports = Account