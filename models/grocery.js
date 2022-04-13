const mongoose = require("mongoose")
const grocerySchema = mongoose.Schema({name: String,quantity: String,price: Number})
module.exports = mongoose.model("grocery",grocerySchema)
