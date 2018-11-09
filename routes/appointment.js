const express = require('express')
const router = express.Router()

router.get('/:username', async(req, res) => {
    res.render("appointment", {
        menu: 'appointment'
      });
})

module.exports = router
