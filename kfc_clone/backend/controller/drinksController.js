const express = require('express')
const router = express.Router()
const Drinks = require('../models/drinksModel')


router.post('', async (req, res) => {
    try {
        const drinks = await Drinks.create(req.body)

        return res.status(201).send(drinks)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const drinks = await Drinks.find().lean().exec()
    
        return res.status(201).send(drinks)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router