const mongoose=require("mongoose")

const contactSchema =  mongoose.Schema({
    user_id:{
       type:mongoose.Schema.Types.ObjectId,
       require:true,
       ref:"users",
    },
    name:{
        type:String,
        require:[true,"Please add the contact name"]
    },
    email:{
        type:String,
        require:[true,"Please add the Email address"]
    },
    phone:{
        type:String,
        require:[true,"Please add the phone Number"]
    },
},
{
    timestamps:true,
})

module.exports=mongoose.model("contacts",contactSchema)