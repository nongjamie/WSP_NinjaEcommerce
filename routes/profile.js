const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const account = new Account()
var username = ""
router.post("/",async (req,res)=>{
    username = req.body.username
    console.log("sssssssssss")
    console.log(username)
    const result = await account.getAccountBy(username)
    console.log('post account')
    console.log(result)
    res.send("success")
})

router.get("/",async (req,res)=>{
    const result = await account.getAccountBy(username)
    //console.log(result)
    console.log("get account")
    console.log(result.customer)
    res.render("profile", {
        'account':result.account,
        'customer':result.customer
    });
})

module.exports = router