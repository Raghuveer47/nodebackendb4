const {register,login} = require('../controller/authController')
const express = require("express")
const router = express.Router()


router.post("/register",register)
router.post("/login",login)

module.exports = router