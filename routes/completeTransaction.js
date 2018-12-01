const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const cart = new Cart()

router.get('/:username', async (req, res) => {
    if(res.locals.user.username !== req.params.username || !res.locals.user){
        console.log('wrong username or null')
        res.redirect('/').status(403)
    }else{
        console.log('============ transaction get')
        const result = await cart.checkoutByUsername(res.locals.user.username)
        console.log(result)
        res.render('completeTransaction',{
            orderID : result.orderID
        })
    }
})

module.exports = router
