const express =require("express")
const router=express.Router()
const {getContacts,createContact,getContact,updateContact,deleteContact}=require("../controllers/contactcontroller")
const validatetoken = require("../middleware/validatetokenhandler")

router.use(validatetoken)
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)



module.exports = router