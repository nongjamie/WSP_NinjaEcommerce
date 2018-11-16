const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const Account = require('../class/account')
const account = new Account()
const cart = new Cart()

router.get('/:username', async (req, res) => {
    if (res.locals.user.username !== req.params.username || !res.locals.user) {
        console.log('wrong username or null')
        res.redirect('/')
    } else {
        const cartResult = await cart.getUserCart(req.params.username)
        const accResult = await account.getAccountBy(req.params.username)
        // waiting for address
        res.render("summary", {
            products: cartResult.cart,
            account: accResult.account,
            customer: accResult.customer,
        });
    }

})

module.exports = router
