const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const account = new Account()

router.get('/:username', async(req, res) => {

    const result = await account.getAccountBy(req.params.username)
    console.log(result)
    // waiting for address
    res.render("appointment", {
        menu: 'appointment',
        profile: result.account,
      });
})

module.exports = router
