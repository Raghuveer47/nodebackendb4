const mongoose = require("mongoose")

const connectDb = async()=>{
    try{
       await mongoose.connect("mongodb+srv://raghuveermustimalla_db_user:162026@cluster0.n2i25s2.mongodb.net/?appName=Cluster0")
         console.log("db connected")

    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb;
