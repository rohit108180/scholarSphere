import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
// import 

class customAPIError extends Error{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}




const Register = async(req, res) =>{

        const {name, email, password} = req.body;
        // console.log("got the request");

        if(!name || !email || !password){
            throw new customAPIError("Please Provide all the valuess");
        }

     


        const user = await User.create(req.body);
        const token =  user.createJWT();

        user.password=  undefined;
        res.status(StatusCodes.CREATED).json({user , token});

} 
 
const Login = async(req, res) =>{

    const { email, password} = req.body;

    if(!email || !password){
        throw new customAPIError("Please Provide all the valuess");
    }


    const user = await User.findOne({email}).select("+password");
    if(!user) throw new Error("Invalid Ceudentials");
    const isMatch=  user.comparePassword(password, user.password);
    
    if(!isMatch) throw new Error("Invalid Crudentials");

    const token =  user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({user, token});

    console.log('login user');
}


const UpdateUser = async (req, res) => {
    const { email, name, lastname, githubLink, linkedIn, instagram, resumeId, userBio } = req.body;
    console.log(req.body);
    
    const user = await User.findOne({ _id: req.user.userID });
    if(!user) console.log("User doesn't exits")
  
    user.lastname = lastname;
    user.resumeId = resumeId;
    user.userBio = userBio;
    user.instagram = instagram;
    user.linkedIn = linkedIn;
    user.githubLink = githubLink;
    
    await user.save();

    user.password= undefined;
    res.status(StatusCodes.OK).json({ user, location: user.location });
  };

export {UpdateUser, Register, Login}