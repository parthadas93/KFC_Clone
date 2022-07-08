const express = require('express')
const router = express.Router()
const Products = require("../models/productModels")

router.get('', async (req, res) => {
    try {
        const Product = await Products.find().lean().exec()
        return res.status(201).send(Product)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})

router.post('', async (req, res) => {
    try {
        const Product = await Products.create(req.body)

        return res.status(201).send(Product)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
router.delete('', async (req, res) => {
    try {
        const allDelete = Products. deleteMany()
        return res.status(202).send(allDelete)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})



module.exports = router