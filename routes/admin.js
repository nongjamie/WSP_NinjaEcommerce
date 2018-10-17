const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const Feedback = require('../class/feedback')

const account = new Account()
const feedback = new Feedback()


        //TODO check user.isAdmin waiting for isAdmin feild

router.get('/admin', async (req, res) => {
        const user = res.locals.user
        console.log(user)
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

router.post('/addFeedback', async(req, res) => {
        await feedback.addFeedback(req.body)
        console.log('add feedback success')
        res.send('success')
})

router.get('/admin/feedbacks', async(req, res) => {
        const result = await feedback.getFeedbacks()
        res.render('admin-feedbacks', {
                feedbacks : result.feedbacks
        })
})

module.exports = router
