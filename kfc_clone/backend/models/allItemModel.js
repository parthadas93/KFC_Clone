const mongoose = require('mongoose')
const allItemSchema = new mongoose.Schema({
    title: { type: String, require: true },
    type: { type: String, require: true },
    price: { type: Number, require: true },
    des: { type: String, require: true },
    img: { type: String, require: true }
},
    {timestamps: true}

)

module.exports  = mongoose.model('allItem', allItemSchema)







// "img": "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K079.jpg?ver=16.66",
// "title": "Mirinda large",
// "type": "Veg",
// "price": 88.57,
// "des": "Refereshing beverage",
// "id": 107