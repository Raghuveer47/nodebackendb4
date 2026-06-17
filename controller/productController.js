const Product = require("../models/Product")



exports.addproduct = async (req,res)=>{
try{

 const product = await Product.create({
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    image:req.file.path
 });

 res.status(201).json({
    message: "products added",
    product
 })

}catch(err){
res.status(500).json({
    message: err,
    
 })
}
}

exports.getall = async (req,res)=>{
    
    try{

        const product = await Product.find()
        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}

exports.getbyid = async (req,res)=>{
    
    try{

        const product = await Product.findById(req.params.id)

        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}