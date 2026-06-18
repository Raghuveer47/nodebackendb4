const Product = require("../models/Product")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name:"dy9zlgjh6",
    api_key:"431429911734948",
    api_secret:"y5eNgFlDZXC_wCf80gz6llv7HTg"
})



exports.addproduct = async (req,res)=>{
try{

  const result = await cloudinary.uploader.upload(
    req.file.path,
    {
        folder: "store"
    }
  )

 const product = await Product.create({
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    image:result.secure_url
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