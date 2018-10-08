const express = require('express')
const router = express.Router()
const Product = require('../class/product')
const product = new Product()


// Store route
router.get("/whisky", async function (req, res) {
    const result = await product.getProductList()
    res.render("whisky", {
        menu: 'store',
        typeDrink: 'whisky'
    });
});

// Beer route
router.get("/beer", async function (req, res) {
    res.render("beer", {
        menu: 'store',
        typeDrink: 'beer'
    });
});

// Wine route
router.get("/wine", async function (req, res) {
    res.render("wine", {
        menu: 'wine',
        typeDrink: 'wine'
    });
});

// Mixer route
router.get("/mixer", async function (req, res) {
    res.render("mixer", {
        menu: 'mixer',
        typeDrink: 'mixer'
    });
});

module.exports = router
