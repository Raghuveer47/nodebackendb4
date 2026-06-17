const {addproduct,getall,getbyid} = require("../controller/productController")
const express = require("express")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-"+ file.originalname)
    }
})

const upload = multer({
    storage
})

router.post("/add/product",upload.single("image"),addproduct)

router.get("/get/products",getall)

router.get("/get/products/:id",getbyid)

module.exports = router