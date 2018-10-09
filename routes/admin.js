const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const account = new Account()

router.get('/admin', async (req, res) => {
        const result = await account.getAccountList()
        console.log(result)
        res.render('admin', {
                users: result.accounts
        })
})

module.exports = router
