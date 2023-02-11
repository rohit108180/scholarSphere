import express from "express";
const app = express();

// import cors from 'cors'

import "express-async-errors" 
import morgan from 'morgan';

// db and authentication 
import connectDB from "./db/conectDB.js";


// routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";


import dotenv from 'dotenv';
dotenv.config();




// Middleware imports;
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleWare from "./middleware/not-found.js";
import { authenticateUser } from "./middleware/auth.js";



// app.use(cors());

app.get('/',(req , res) =>{
    res.json({msg :"Welcome!"});
})


// middleware

if(process.env.NODE_ENV != 'production'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs",authenticateUser,  jobRouter);

app.use(notFoundMiddleWare); 
app.use(errorHandlerMiddleware);





const port = process.env.PORT || 5000;



const start = async () =>{
    // console.log(process.env.MONGO_URL); 
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () =>{
            console.log(`server running on ` + port);
        });
        
    }
    catch(error){
        console.log("database connection failed with error : ", error);
    }
}


start();