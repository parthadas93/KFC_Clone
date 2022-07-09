const express = require('express')
const router = express.Router()
const PopCorns = require('../models/popcornModel')


router.post('', async (req, res) => {
    try {
        const popCorn = await PopCorns.create(req.body)

        return res.status(201).send(popCorn)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const popCorn = await PopCorns.find().lean().exec()
    
        return res.status(201).send(popCorn)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router