const mongoose = require("mongoose")
module.exports = () => {
    return mongoose.connect('mongodb+srv://partha:partha4444@cluster0.88ui0ul.mongodb.net/KFC',{   useNewUrlParser: true,  useUnifiedTopology: true});
}