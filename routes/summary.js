const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const Account = require('../class/account')
const account = new Account()
const cart = new Cart()

router.get('/:username', async(req, res) => {
    if(res.locals.user.username !== req.params.username || !res.locals.user){
        console.log('wrong username or null')
        res.redirect('/')
    }
        const cart = await cart.getUserCart(req.params.username)
        const acc = await account.getAccountBy(req.params.username)
        console.log(result)
        // waiting for address
        res.render("summary", {
            products:cart.cart,
            account: acc.account,
            customer: acc.customer,
          });
})

module.exports = router
