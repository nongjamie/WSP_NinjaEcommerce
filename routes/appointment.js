const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const cart = new Cart()

router.get('/:username', async(req, res) => {
    const username = req.params.username    
    res.render("appointment", {
        menu: 'appointment'
      });
})

router.post('/:username',async(req,res)=>{
    console.log("appoint")
    const username = req.params.username    
    const result = await cart.getUserCart(username)
    cart.checkoutByUsername(username)
})

module.exports = router
