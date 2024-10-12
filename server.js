const express=require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbconnection");
const dotenv=require("dotenv").config()

connectDB()
const app=express()

const port=process.env.PORT || 5000 ; 

app.use(express.json())
app.use("/api/contacts",require("./routes/contactroutes"))
app.use("/api/users",require("./routes/usersroutes"))
app.use(errorHandler)



// server running
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})