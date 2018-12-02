const express = require("express")
const router = express.Router()
const Cart = require("../class/cart")
const cart = new Cart()

router.get("/:username", async (req, res) => {
  console.log("get cart page ", res.locals.user.username)
  if (res.locals.user.username !== req.params.username || !res.locals.user) {
    console.log("wrong username or null")
    res.redirect("/")
  }

  const username = req.params.username
  const result = await cart.getUserCart(username)
  let total = result.cart.reduce(
    (acc, cur) => acc + cur.quantity * cur.productPrice,
    0
  )
  // console.log(result.data)
  res.render("cart", {
    products: result.cart,
    total: total
  })
})
router.post("/:das", async (req, res) => {
  const data = req.body
  const result = await cart.removeProductFromCart(data)
  res.send("send success")
})

router.post("/get/amount",async(req,res)=>{
  // var updUser = new User(req.session.user ? req.session.user : {});
  // updUser.profilePic = `/uploads/${req.file.filename}`;
  // User.update({ _id: req.user.id }, updUser, function (err, done) {
  //   if (err) {
  //     return console.log("err");
  //   } else {
  //     req.session.user = updUser;
  //     res.redirect('back');
  //   }
  // })
  const username = req.body.username
  const result = await cart.getUserCart(username)
  // let amount = result.cart.reduce(
  //   (acc, cur) => parseInt(acc.quantity) + parseInt(cur.quantity)
  // )
  var sum = 0
  if(typeof username !=='undefined'){
  let amount =result.cart.forEach(async(element)=>{
      sum+=parseInt(element.quantity)
  })
}
  console.log('paul')
  console.log(sum+"")
  res.send(sum+"")

})

module.exports = router
