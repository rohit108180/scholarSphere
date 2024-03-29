import  jwt  from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

export const authenticateUser = async(req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnAuthenticatedError("authentication Invaild");
    }

    const token = authHeader.split(" ")[1];

    try{
        const payload  = jwt.verify(token, process.env.JWT_SECRET);

        req.user = payload;
    }
    catch(error){
            throw new UnAuthenticatedError("authentication Invaild")
    }
    
    next();
}




