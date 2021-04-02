const data = require('./data')
const express = require('express')
const router = express.Router({ strict: true })

router.get('/ScenicSpot', function(req, res) {
    try {
        const { skip, stop } = req.query
        const result = data.all.slice(skip, stop)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send({})
    }
})

router.get('/ScenicSpot/:id', function(req, res) {
    try {
        const { skip, stop } = req.query
        const id = req.params.id
        const result = data[id].slice(skip, stop)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send({})
    }
})

module.exports = router