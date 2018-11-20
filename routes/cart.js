const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const cart = new Cart()

router.get('/:username', async(req, res) => {
    if(res.locals.user.username !== req.params.username || !res.locals.user){
        console.log('wrong username or null')
        res.redirect('/')
    }

    const username = req.params.username    
    const result = await cart.getUserCart(username)
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
    if(res.locals.user.username !== req.params.username || !res.locals.user){
        console.log('wrong username or null')
        res.status(403)
    }
    const data = req.body 
     const result= await cart.removeProductFromCart(data)
    res.send('send success')
})

module.exports = router
