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
            const accountList = await this.getList()
            let id = accountList.data.accounts.length + 1
            console.log(account.username)
            console.log(account.password)
            console.log(id.toString())
            const response = await axios.post(this.URL + 'addAccount',{},{
                headers:{
                    username: account.username,
                    password: account.password,
                    customerID: id
                }
            })
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
}

module.exports = Account