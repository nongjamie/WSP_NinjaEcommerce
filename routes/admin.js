const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const account = new Account()

router.get('/admin', async (req, res) => {
        const result = await account.getAccountList()
        console.log(result)
        res.render('admin-all-user', {
                users: result.accounts
        })
})

router.get('/admin/:username', async (req, res) => {
        const result = await account.getAccountBy(req.params.username)
        console.log(result)
        res.render('admin-user-info',{
                account : result.account
        })
})

module.exports = router
