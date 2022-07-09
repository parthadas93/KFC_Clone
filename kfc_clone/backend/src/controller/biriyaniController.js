const express = require('express')
const router = express.Router()
const Biriyani = require('../models/biriyaniModel')


router.post('', async (req, res) => {
    try {
        const biriyani = await Biriyani.create(req.body)

        return res.status(201).send(biriyani)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const biriyani = await Biriyani.find().lean().exec()
    
        return res.status(201).send(biriyani)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router