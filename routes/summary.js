const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const cart = new Cart()

router.get('/:username', async(req, res) => {
    const username = req.params.username    
    res.render("summary", {
        menu: 'summary'
      });
})

router.post('/:username',async(req,res)=>{
    console.log("appoint")
    console.log(req.body.username)
    const username = req.body.username   
    const result = await cart.getUserCart(username)
    const ss = await cart.checkoutByUsername(username)
    res.send('send success')
})

module.exports = router
