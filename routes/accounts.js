const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const passport = require('passport')
const account = new Account()

router.get('/getList', async(req, res) => {
    console.log('get list')
    const result = await account.getAccountList()
    // console.log(result.data)
    console.log(result)
    res.send(result)
})

router.post('/addAccount', async(req, res) => {
    const result = await account.add(req.body)
    console.log(result)
    if(result.return_code !== '500'){
        console.log('must reditrect')
        res.send('success')
    }
    else{
        res.status(400).send('fail')
    }

})

router.post('/removeAccount', async(req, res) => {
    const result = await account.remove(req.body)
    console.log(result)
    if(result.return_code == '200') res.send('success')
    else res.status(result.return_code).send('error')
})

router.post('/login', 
   passport.authenticate('user-local', {
       successRedirect:'/',
       failureRedirect:'/login',
       failureFlash:true,
       successFlash:'Success'
   })
)

module.exports = router
