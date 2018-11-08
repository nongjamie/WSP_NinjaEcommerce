const express = require('express')
const router = express.Router()

router.get('/:username', async(req, res) => {
    const username = req.params.username
    res.render("appointment", {
        menu: 'appointment'
      });
})

module.exports = router
