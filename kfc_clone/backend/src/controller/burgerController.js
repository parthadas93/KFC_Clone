const express = require('express')
const router = express.Router()
const Burgers = require('../models/burgerModel')


router.post('', async (req, res) => {
    try {
        const burger = await Burgers.create(req.body)

        return res.status(201).send(burger)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const burger = await Burgers.find().lean().exec()
    
        return res.status(201).send(burger)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router