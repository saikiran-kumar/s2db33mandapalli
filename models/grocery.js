const mongoose = require("mongoose")
const grocerySchema = mongoose.Schema({
    name: String,
    quantity:{ 
        type:String,
        minLength:5,
        maxLength:10
    },
    price: {
       type: Number,
       min:5,
       max:100}
    })

module.exports = mongoose.model("grocery",grocerySchema)
