const axios = require('axios')
const URL = require('../config/database')

class Account {

    async getAccountList() {
        try {
            const response = await axios.get(URL.getList)
            console.log(response.data)
            return response.data
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
            const response = await axios.post(URL.addAccount,{},{
                headers:{
                    username: account.username,
                    password: account.password,
                    email: account.email,
                    name: account.name,
                    gender: account.gender,
                    bday: account.day + '/' + account.month + '/' + account.year,
                    address: account.address,
                    province: account.province,
                    district: account.district,
                    zipCode: parseInt(account.zipCode),
                    phone: account.telephone
                }
            })
            return response.data
        } catch (error) {
            console.log('Post account to database error')
            console.log(error)
            return error.data
        }
    }

    async remove(username){
        try {
            const response = await axios.post(URL.removeAccount,{},{
                headers:{
                    'username' : username,
                }
            })
            return response.data
        } catch (error) {
            console.log('Login error')
            console.log(error.data)
            return error.data
        }
    }

    async login(account) {
        try {
            console.log(account)
            console.log(account.username)
            const response = await axios.post(URL.login,{},{
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
           
       try { const response = await axios.post(URL.getAccountByUsername,{},{
                headers:{
                    'username': username
                }
            })
            return response.data
        }catch(error){
            return error.data
        }
    }
// TODO Remove account by username
}

module.exports = Account