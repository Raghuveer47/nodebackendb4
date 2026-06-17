const mongoose = require("mongoose")

const Productschema = new mongoose.Schema({

    name:{
        type:String,
    },
    price:{
        type:Number
    },
    description:{
        type:String,
    },
    image:{
        type:String
    }

    
})

module.exports = mongoose.model("Product",Productschema)