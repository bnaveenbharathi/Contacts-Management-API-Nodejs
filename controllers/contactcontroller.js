const asynchandler=require("express-async-handler")
const Contact=require("../model/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts=asynchandler(async(req,res)=>{
    const contacts= await Contact.find({user_id:req.user.id})
    res.status(200).json({contacts})
})

//@desc create all contacts
//@route POST /api/contacts
//@access private

const createContact=asynchandler(async (req,res)=>{
    console.log("The req body ",req.body);
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(201).json(contact)
}
)
//@desc get contact
//@route GET /api/contacts/:id
//@access private

const getContact=asynchandler(async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json({contact})
})

//@desc update contact
//@route PUT /api/contacts/:id
//@access private

const updateContact=asynchandler(async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User Don't have permission to update other users contacts")
    }
    const updatecontact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    )
    res.status(200).json(updatecontact)
})

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access private

const deleteContact=asynchandler(async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User Don't have permission to update other users contacts")
    }
    await contact.deleteOne({_id:req.params.id})
    res.status(200).json({message:contact,alert:"successfully deleted"})
}
)

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}