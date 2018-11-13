const express = require('express')
const router = express.Router()
const Cart = require('../class/cart')
const cart = new Cart()

router.get('/:username', async(req, res) => {
    res.render("summary", {
        menu: 'summary'
      });
})

module.exports = router
