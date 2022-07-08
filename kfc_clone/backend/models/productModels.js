const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title: { type: String, require: true },
    type: { type: String, require: true },
    price: { type: Number, require: true },
    des: { type: Number, require: true },
    img: { type: Number, require: true }
},
    {timestamps: true}

)

export const productModel = mongoose.model('product', productSchema)







// "img": "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K079.jpg?ver=16.66",
// "title": "Mirinda large",
// "type": "Veg",
// "price": 88.57,
// "des": "Refereshing beverage",
// "id": 107