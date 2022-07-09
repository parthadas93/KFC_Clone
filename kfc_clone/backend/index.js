const express = require('express')
const app = express()
app.use(express.json())
const connect = require("./config/db")
const allItemController = require('./controller/allItemController')
const chickenRollsController = require ('./controller/chickenRollsController')

app.use('/allItem', allItemController)
app.use('/chicken_rolls', chickenRollsController)

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







