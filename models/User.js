import mongoose from "mongoose";
import  bcrypt from 'bcryptjs'
import validator from "validator";
import jwt from "jsonwebtoken";

// import { hash } from "bcryptjs";

const UserSchema = mongoose.Schema({
    name:{
        type :String,
        required :[true, 'Please Provide name '],
        minlength : 3,
        maxlength : 20,
        trim:true
    },
    email:{
        type :String,
        required :[true, 'Please Provide email '],
        unique:true,
        validate:{
            validator: validator.isEmail,
            message: "please provide valid email"
        }
    },
    password:{
        type :String,
        required :[true, 'Please Provide Password '],
        minlength :6,
        // select : false 
    },
    lastname:{
        type :String,
        // minlength : 3,
        maxlength : 20,
        trim:true,
        default : " "
    },
    location:{
        type :String,
        maxlength : 20,
        trim:true,
        default : "India" 
    },


})

UserSchema.pre('save', async function(){
    const salt  =  await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); 
})

UserSchema.methods.createJWT = function() {
    return jwt.sign({userID : this._id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_LIFETIME});
}

UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;

}


export default mongoose.model("User", UserSchema);