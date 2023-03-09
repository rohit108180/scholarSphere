import  express from "express";

const authRouter = express.Router();


import { Login, Register, UpdateUser } from "../controller/authController.js";
import { authenticateUser } from "../middleware/auth.js";


 authRouter.route('/register').post(Register);
 authRouter.route('/login').post(Login);
 authRouter.route('/updateUser').patch( authenticateUser,  UpdateUser);
//  to get user using :id


export default authRouter;
