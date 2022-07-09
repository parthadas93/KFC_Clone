const express = require('express')
const router = express.Router()
const BoxMeals= require ('../models/boxMealModels')


router.post('', async (req, res) => {
    try {
        const boxMeal = await BoxMeals.create(req.body)

        return res.status(201).send(boxMeal)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const boxMeal = await BoxMeals.find().lean().exec()
    
        return res.status(201).send(boxMeal)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})


module.exports=router