const express = require('express')
const router = express.Router()
const Account = require('./accountToDataBase')
const axios = require('axios')

const account = new Account()

router.get('/getList', async(req, res) => {
    console.log('get list')
    const result = await account.getList()
    console.log(result.data)
    res.send(result.data)
})

router.post('/addAccount', async(req, res) => {
    console.log('add account')
    console.log(req.body)
    // const result = await account.add({username: req.body.username, password: req.body.password})
    // console.log(result.data)
    // res.send(result.data)
})

router.post('/login', async(req, res) => {
    console.log('logging in')
    const result = await account.login({username: req.body.username, password: req.body.password})
    console.log(result.data)

    res.redirect('/')
    // const result = await axios.post('https://us-central1-ninjadrink-25671.cloudfunctions.net/login',{},{
    //     headers:{
    //         'username': account.username,
    //         'password': account.password
    //     }
    // })
    
})

module.exports = router
