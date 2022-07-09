const express = require('express')
const router = express.Router()
const AllItems = require("../models/allItemModel")

// router.post('', async (req, res) => {
//     try {
//         const Product = await Products.create(req.body)

//         return res.status(201).send(Product)
//     }
//     catch (err) {
//         return res.status(500).send(err.message)
//     }
// })
router.post('', async (req, res) => {
    try {
        const allItem = await AllItems.create(req.body)

        return res.status(201).send(allItem)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

// router.post('', async (req, res) => {
//     try {
//         const Product = await Products.create(req.body)

//         return res.status(201).send(Product)
//     }
//     catch (err) {
//         return res.status(500).send(err.message)
//     }
// })
// router.get('', async (req, res) => {
//     try {
//         const Product = await Products.find().lean().exec()
//         console.log('all product', Product.length)
//         return res.status(201).send(Product)
//     }
//     catch (err) {
//         return res. status(500).send(err.message)
//     }
// })

router.get('', async (req, res) => {
    try {
        const allItem = await AllItems.find().lean().exec()
      
        return res.status(201).send(allItem)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})




module.exports = router