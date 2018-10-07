const express = require('express')
const router = express.Router()

router.get('/:username', async(req, res) => {
    console.log('get list')
    const username = req.params.username
    console.log(username)
    // console.log(result.data)
    res.send(username)
})

module.exports = router
