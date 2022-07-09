const mongoose = require('mongoose')
const biriyaniSchema = new mongoose.Schema({
    title: { type: String, require: true },
    type: { type: String, require: true },
    price: { type: Number, require: true },
    des: { type: String, require: true },
    img: { type: String, require: true }
},
    {timestamps: true}

)

module.exports  = mongoose.model('biriyani', biriyaniSchema)