const express = require('express')
const router = express.Router()
const Account = require('../class/account')
const account = new Account()

router.get('/:username', async(req, res) => {

    if(res.locals.user.username !== req.params.username || !res.locals.user){
        console.log('wrong username or null')
        res.redirect('/')
    }
        const result = await account.getAccountBy(req.params.username)
        console.log(result)
        // waiting for address
        res.render("appointment", {
            menu: 'appointment',
            account: result.account,
            customer: result.customer,
            
          });
    
})

module.exports = router
