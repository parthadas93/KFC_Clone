const express = require('express')
const router = express.Router()
const ChickenBuckets= require ('../models/chickenBucketModel')


router.post('', async (req, res) => {
    try {
        const bucket = await ChickenBuckets.create(req.body)

        return res.status(201).send(bucket)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const bucket = await ChickenBuckets.find().lean().exec()
    
        return res.status(201).send(bucket)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router