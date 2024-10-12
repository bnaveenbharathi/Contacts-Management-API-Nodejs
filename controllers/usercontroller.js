const asynchandler=require("express-async-handler")
const users=require("../model/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser=asynchandler(async(req,res)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password ){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const userAvailable=await users.findOne({
        email
    })
    if(userAvailable){
        res.status(400)
        throw  new Error("user already registered")
    }
    //Hash Password
    const hashedpassword=await bcrypt.hash(password,10)
    const user=await users.create({
        username,
        email,
        password:hashedpassword
    })
    if(user){
        res.status(201).json({_id:user.id,email:user.email,message:"successfully created"})

    }else{
        res.status(400)
        throw new Error("user data us not valid")
    }
    res.json({message:"register the user"})
})

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await users.findOne({email})
    //comparing password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            },

        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"15m"}
    )
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("oops ! Email or password is not valid")
    }
    
})

//@desc info user
//@route POST /api/users/current
//@access private

const currentUser=asynchandler(async(req,res)=>{
    
    res.json(req.user)
})

module.exports={registerUser,loginUser,currentUser}