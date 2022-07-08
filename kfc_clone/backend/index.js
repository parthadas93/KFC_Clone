const express = require('express')
const app = express()
app.use(express.json())
const connect = require("./config/db")
const productController = require('./controller/productController')

app.use('/kfcItems', productController)

app.listen(8787, async () => {
    try {
         connect()
        console.log('connected')
        
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("port 8787 running")
})







