const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const Feedback = require('../class/feedback')
const Order = require('../class/order')
const passport = require('passport')

const account = new Account()
const feedback = new Feedback()
const order = new Order()

        //TODO check user.isAdmin waiting for isAdmin feild
router.get('/admin', async (req, res) => {
        // if user is an admin 
        const accounts = await account.getAccountList()
        res.render('admin-all-user', {
                users: accounts.accounts
        })
})

router.get('/admin/user/:username', async (req, res) => {
        const result = await account.getAccountBy(req.params.username)
        console.log(result)
        res.render('admin-user-info',{
                account : result.account
        })
})
router.get('/admin/orders', async (req, res) => {
        const result = await order.getOrderList()
        console.log(result.orders)
        res.render('admin-all-order',{
                order:result.orders
        })
})

router.post('/addFeedback', async(req, res) => {
        const result = await feedback.addFeedback(req.body)
        console.log(result)
        res.send('success')
})

router.post('/removeFeedback', async(req, res) => {
        console.log(req.body.feedbackID)
        const result = await feedback.removeFeedback(req.body.feedbackID)
        console.log(result)
        res.send('success')
})

router.get('/admin/feedbacks', async(req, res) => {
        const result = await feedback.getFeedbacks()
        res.render('admin-feedbacks', {
                feedbacks : result.feedbacks
        })
})

router.post('/removeUser',async(req,res)=>{
        const username=req.body.username
        console.log(username)
        const result = await account.remove(username)
        res.send('success')
})

router.post('/login',
passport.authenticate('admin-local', {
        successRedirect:'/admin',
        failureRedirect:'/loginAdmin',
        failureFlash:true,
        successFlash:'Success Admin'
    })
)

module.exports = router
