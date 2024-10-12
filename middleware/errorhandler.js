const {constants}=require("../constants")
const errorHandler=(err,req,res,next)=>{
    const statuscode=res.statuscode ? res.statuscode :500;
    switch (statuscode){
        case constants.VALIDATION_ERROR:
            res.json({title:"validation failed",message:err.message,stackTrace:err.stack})
            break;
        case constants.NOT_FOUND :
            res.json({title:"Not Found",message:err.message,stackTrace:err.stack})
            break;
        case constants.FORBIDDEN :
            res.json({title:"FORBIDDEN",message:err.message,stackTrace:err.stack})
            break;
        case constants.UNAUTHORIZED :
            res.json({title:"UNAUTHORIZED",message:err.message,stackTrace:err.stack})
            break;
        case constants.SERVER_ERROR :
            res.json({title:"SERVER_ERROR",message:err.message,stackTrace:err.stack})
            break;
        default:
            console.log("NO ERROR ALL GOOD");
            break;
    }

}

module.exports=errorHandler