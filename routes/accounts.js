const express = require('express')
const router = express.Router()
const Account = require('./accountToDataBase')
const axios = require('axios')
const passport = require('passport')
const account = new Account()

router.get('/getList', async(req, res) => {
    console.log('get list')
    const result = await account.getList()
    // console.log(result.data)
    res.send(result.data)
})

router.post('/addAccount', async(req, res) => {
    const result = await account.add(req.body)
    console.log(result)
    if(result.return_code !== '500'){
        console.log('must reditrect')
        res.send('/login')
    }
    else{
        res.redirect('/signup')
    }

})

router.post('/login', 
   passport.authenticate('local',{
       successRedirect:'/',
       failureRedirect:'/users/login',
       failureFlash:true
   })
)

module.exports = router
