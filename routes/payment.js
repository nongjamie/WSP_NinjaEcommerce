const express = require('express')
const router = express.Router()

router.get('/:username', async(req, res) => {  
    res.render("payment", {
        menu: 'payment'
      });
})

module.exports = router
