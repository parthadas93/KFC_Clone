const express = require('express')
const router = express.Router()
const Snacks = require('../models/snacksModel')


router.post('', async (req, res) => {
    try {
        const snacks = await Snacks.create(req.body)

        return res.status(201).send(snacks)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const snacks = await Snacks.find().lean().exec()
    
        return res.status(201).send(snacks)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router