const express = require('express')
const router = express.Router()
const ChickenRolls = require('../models/chickenRollsModel')


router.post('', async (req, res) => {
    try {
        const chickenRoll = await ChickenRolls.create(req.body)

        return res.status(201).send(chickenRoll)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const chickenRoll = await ChickenRolls.find().lean().exec()
    
        return res.status(201).send(chickenRoll)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})

module.exports = router