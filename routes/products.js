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
    console.log('dadasd')
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
    console.log('beer na ja')
    const result = await product.getCategoryByName('Beer')
    console.log(result)
    res.render("beer", {
      menu: 'store',
      typeDrink: 'beer',
      products: result.products
    });
  });

  // Wine route
  router.get("/wine",async function(req, res) {
    const result = await product.getCategoryByName('Wine')
    console.log(result)
    res.render("wine", {
      menu: 'store',
      typeDrink: 'wine',
      products: result.products
    });
  });

  // Mixer route
  router.get("/mixer",async function(req, res) {
    const result = await product.getCategoryByName('Mixer')
    console.log(result)
    res.render("mixer", {
      menu: 'store' ,
      typeDrink: 'mixer',
      products:result.products
    });
  });


  // POST
  router.post('/whisky',async function(req, res){
    const data = req.body
    const result = await product.addProductToCart(data)
    console.log('post whisky')
    console.log(result)
    res.send('send success')
  })
  router.post('/beer',async function(req, res){
    const data = req.body
    const result = await product.addProductToCart(data)
    console.log('post beer')
    console.log(result)
    res.send('send success')
  })

  router.post('/wine',async function(req, res){
    const data = req.body
    const result = await product.addProductToCart(data)
    console.log('post wine')
    console.log(result)
    res.send('send success')
  })

  router.post('/mixer',async function(req, res){
    const data = req.body
    const result = await product.addProductToCart(data)
    console.log('post mixer')
    console.log(result)
    res.send('send success')
  })




module.exports = router
