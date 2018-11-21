const express = require('express')
const router = express.Router()
const Order = require('../class/order')
const order = new Order()
var data=''
router.post('/',async(req,res)=>{
    data=req.body.orderID
    console.log(data)
    //console.log( JSON.stringify(order.getOrderList()))
    const result = await order.getOrderByOrderID(data)
    res.send("success")
})

router.get("/", async(req, res)=>{
  if(data!=''){
    console.log(data)
    const result = await order.getOrderByOrderID(data)
    console.log(result.order)
    if(result.return_code=='200'){
    res.render("status", {
      menu: 'status',
      order:result.order
    });
  }else{
    res.render("status", {
      menu: 'status',
      order: {}
    });
  }
  }else{
    res.render("status", {
      menu: 'status',
      order: {}
    });
  }

  });

  module.exports = router