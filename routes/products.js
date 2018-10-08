const express = require('express')
const router = express.Router()
const Product = require('../class/product')
const product = new Product()

// Promotion route
router.get("/promotion",async function(req, res) {
    res.render("promotion", {
      menu: 'promotion'
    });
  });
  
  // Promotion route
  router.get("/pro1",async function(req, res) {
    res.render("pro1", {
      menu: 'pro1'
    });
  });
  
  // Store route
  router.get("/store",async function(req, res) {
    res.render("store", {
      menu: 'store',
      typeDrink: 'null'
    });
  });
  
  // Store route
  router.get("/whisky",async function(req, res) {

    const result = await product.getCategoryByName('Whisky')
    console.log(result)
    res.render("whisky", {
      menu: 'store',
      typeDrink: 'whisky',
      products: result.products
    });
  });
  
  // Beer route
  router.get("/beer",async function(req, res) {
    res.render("beer", {
      menu: 'store',
      typeDrink: 'beer'
    });
  });
  
  // Wine route
  router.get("/wine",async function(req, res) {
    res.render("wine", {
      menu: 'store',
      typeDrink: 'wine'
    });
  });
  
  // Mixer route
  router.get("/mixer",async function(req, res) {
    res.render("mixer", {
      menu: 'store' ,
      typeDrink: 'mixer'
    });
  });


  // POST 
  router.post('/whisky',async function(req, res){
    const data = req.body
    const result = await product.addProductToCart(data)
    console.log('post whisky')
    console.trace(result)
    res.send('send success')
  })


module.exports = router
