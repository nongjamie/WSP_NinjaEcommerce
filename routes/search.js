const express = require('express')
const router = express.Router()
const Product = require('../class/product')
const product = new Product()

router.post('/',async function(req,res){
    const data = req.body
    const result = await product.searchProductByName(data)
    console.log('post search product')
    console.log(result)
    res.send('send success')
})


module.exports = router