const express = require('express')
const app = express()
app.use(express.json())
const connect = require("./config/db")
const allItemController = require('./controller/allItemController')
const chickenRollsController = require('./controller/chickenRollsController')
const popCornController = require('./controller/popCornController')
const hotDealsController = require('./controller/hotDealsController')
const chickenBucketController = require('./controller/chickenBucketController')
const boxMealController = require('./controller/boxMealController')
const burgerController = require('./controller/burgerController')
const biriyaniController = require('./controller/biriyaniController') 
const snacksController = require('./controller/snacksController')
const drinksController = require('./controller/drinksController')
const cartController = require ('./controller/cartController')
const port = process.env.PORT || 8787
app.use('/allItem', allItemController)
app.use('/chicken_rolls', chickenRollsController)
app.use('/popCorn', popCornController)
app.use('/hotDeal', hotDealsController)
app.use('/chicken_bucket', chickenBucketController)
app.use('/boxMeal', boxMealController)
app.use('/burger', burgerController)
app.use('/biriyani', biriyaniController)
app.use('/snacks', snacksController)
app.use('/drinks', drinksController)
app.use ('/cart', cartController)

app.listen(port, async () => {
    try {
         connect()
        console.log('connected')
        
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("port 8787 running")
})







