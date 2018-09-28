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
            const response = await axios.post(this.URL + 'addAccount',{
                username: account.username,
                password: account.password,
                id: account.id
            })
            return response
        } catch (error) {
            console.log('Post account to database error')
            return error
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
            return response
        } catch (error) {
            console.log('Login error')
            console.log(error)
            return error
        }
    }
}

module.exports = Account