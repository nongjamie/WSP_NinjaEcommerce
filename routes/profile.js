const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const Customer = require('../class/customer')
const account = new Account()
const customer = new Customer()
var username = ""

router.post("/",async (req,res)=>{
    username = req.body.username
    //console.log("sssssssssss")
    //console.log(username)
    const result = await account.getAccountBy(username)
    //console.log('post account')
    //console.log(result)
    res.send("success")
})

router.get("/",async (req,res)=>{
    const result = await account.getAccountBy(username)
    //console.log(result)
    res.render("profile", {
        'account':result.account,
        'customer':result.customer
    });
})

router.post("/update",async (req,res)=>{
    const customerinfo = req.body
    console.log("paul")
    console.log(customerinfo)
    const result = await customer.updateCustomerInfo(customerinfo)
    console.log('update')
    console.log(result)
    res.send("success")
})

module.exports = router