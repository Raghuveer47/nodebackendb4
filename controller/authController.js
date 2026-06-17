const User = require('../models/Auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
try{

    const extistinguser = await User.findOne({
        email:req.body.email
    })
    if(extistinguser){
       return res.status(400).json({
        message:"user already registered"
       })
    }
const hashpswrd = await  bcrypt.hash(req.body.password,10)

    const user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password:hashpswrd
    })

    res.status(201).json({
    message: "register done......",
    user
 })

}catch(err){

}
}

exports.login = async (req,res)=>{
try{

    const user = await User.findOne({
        email:req.body.email
    })

    if(!user){
return res.status(400).json({
        message:"user not found "
       })
    }

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if(!isMatch){
  return res.status(400).json({
    message:"invalid pswrd"
  })
    }

    const token = jwt.sign(
        {
            id:user._id
        },
        "mykeypswrd",
        {
            expiresIn: "7d"
        }
    )

    res.json({
         message: "login done...",
        token
    })




}catch(err){

}
}