const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const cart = new Cart()

router.get('/:username', async(req, res) => {
    console.log('get cart  ')
    const username = req.params.username    
    const result = await cart.getUserCart(username)
    console.log(result.cart)
    let total = result.cart.reduce((acc, cur) => 
        acc + (cur.quantity * cur.productPrice)
    ,0)
    // console.log(result.data)
    res.render('cart',{
        products:result.cart,
        total: total,
    })
})
router.post('/:username',async(req,res)=>{
    console.log('paul')
    const username = req.params.username   
    cart.removeProductFromCart(username)
})

module.exports = router
