const express = require('express')
const router = express.Router()
const Cart = require('../models/cartModel')


router.post('', async (req, res) => {
    try {
        const cart = await Cart.create(req.body)

        return res.status(201).send(cart)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get('', async (req, res) => {
    try {
        const cart = await Cart.find().lean().exec()
    
        return res.status(201).send(cart)
    }
    catch (err) {
        return res. status(500).send(err.message)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const deleteItem = await Cart.findByIdAndDelete(req.params.id)
        return res.status(500).send(deleteItem)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


module.exports=router