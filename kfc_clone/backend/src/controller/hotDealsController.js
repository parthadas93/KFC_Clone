const express = require('express')
const router = express.Router()
const HotDeals= require ('../models/hotDealsModel')


router.post('', async (req, res) => {
    try {
        const hotDeal = await HotDeals.create(req.body)

        return res.status(201).send(hotDeal)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const hotDeal = await HotDeals.find().lean().exec()
    
        return res.status(201).send(hotDeal)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router