import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) =>{
    console.log(err);

    let defaultError= {
        statusCode : err.statusCode ||  StatusCodes.INTERNAL_SERVER_ERROR,
        msg : err.message || "something went wrong ! try again"
    }

    if(err.name === "ValidationError"){
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        // defaultError.msg = err.message
        defaultError.msg = Object.values(err.errors).map(item => item.message).join(',');

    } 
    else if(err.code && err.code === 11000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = `${Object.keys(err.keyValue).join(',')} has has to be unique`;
    }


    // res.status(defaultError.statusCode).json({msg:err});
    res.status(defaultError.statusCode).json({msg:defaultError.msg});
}
 
export default errorHandlerMiddleware;