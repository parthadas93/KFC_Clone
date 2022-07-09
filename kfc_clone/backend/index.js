const express = require('express')
const app = express()
app.use(express.json())
const connect = require("./config/db")
const allItemController = require('./controller/allItemController')
const chickenRollsController = require('./controller/chickenRollsController')
const popCornController = require('./controller/popCornController')
const hotDealsController = require ('./controller/hotDealsController')

app.use('/allItem', allItemController)
app.use('/chicken_rolls', chickenRollsController)
app.use('/popCorn', popCornController)
app.use('/hotDeal', hotDealsController)

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







