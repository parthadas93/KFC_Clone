const express = require('express')
const app = express()
app.use(express.json())
const connect = require("./config/db")
app.listen(5050, async () => {
    try {
        await connect()
        console.log('connected')
        
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("port 5050 running")
})







