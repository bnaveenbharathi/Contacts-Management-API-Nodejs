const mongoose=require("mongoose")

const userSchema =  mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please add the user Name"]
    },
    email:{
        type:String,
        require:[true,"Please add the Email address"],
        unique:[true,"Email address already exists"],
    },
    password:{
        type:String,
        require:[true,"Please add the password"]

    },
},
{
    timestamps:true,
})

module.exports=mongoose.model("users",userSchema)