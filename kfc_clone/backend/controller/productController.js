const express = require('express')
const router = express.Router()
const Products = require("../models/productModel")

router.get('', async (req, res) => {
    try {
        const Product = await Products.find().lean().exec()
        return res.status(201).send(Product)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})

