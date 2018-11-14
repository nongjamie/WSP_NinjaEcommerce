const express = require('express')
const router = express.Router()
const Product = require('../class/product')
const product = new Product()
var data = ""
router.post('/',async function(req,res){
    data = req.body.productName
    const result = await product.searchProductByName(data)
    console.log(data)
    console.log('post search product')
    console.log(result.products.length)
    res.render("search", {
        products: result.products
    });
})

router.get('/',async function(req,res){
    const result = await product.searchProductByName(data)
    console.log(data)
    console.log('post search product')
    console.log(result.products.length)
    res.render("search", {
        products: result.products
    });
})



module.exports = router