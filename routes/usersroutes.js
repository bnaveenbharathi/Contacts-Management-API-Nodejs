const express=require("express")
const {registerUser,loginUser,currentUser}=require("../controllers/usercontroller")
const validatetoken = require("../middleware/validatetokenhandler")

const router=express.Router()

router.post("/register",registerUser).post("/login",loginUser).get("/current",validatetoken,currentUser)


module.exports=router