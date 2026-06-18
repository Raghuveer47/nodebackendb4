const jwt =require('jsonwebtoken')

const auth = async(req,res,next)=>{

try{
    const token = req.header("Authorization")

if(!token){
return res.status(400).json({
    message:"login first"
})
}

const decode = jwt.verify(
    token,
    "mykeypswrd"
);

req.user= decode;
next();

}catch(err){
    console.log(err)
}
}

module.exports  = auth