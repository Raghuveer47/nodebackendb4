const express = require('express');
const app = express()
const Product = require('./models/Product')
const connectdb = require('./config/db')
const productRoute = require("./router/productRoute")
const authroute = require('./router/authRouter');
const { register } = require('./controller/authController');
//middleware
app.use(express.json())


connectdb()

app.use("/api/v1",productRoute)
app.use("/auth",authroute)


app.get("/",(req,res)=>{
   res.send("server is working ")
})


//create data


//get all the data
app.get("/get/products")




//update th data
app.put("/update/products/:id",async (req,res)=>{
    
    try{

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            runValidators: true,
            }
        )

        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
})

app.delete("/del/products/:id",async (req,res)=>{
    
    try{

        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json({
    message: " deleted ",
   
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
})





app.listen(3002,()=>{
    console.log("server .started")
})