import express from "express";
const app = express();

import cors from 'cors'

import "express-async-errors" 
import morgan from 'morgan';

// db and authentication 
import connectDB from "./db/conectDB.js";


// routers
import authRouter from "./routes/authRoutes.js";
// import PaperRouter from "./routes/postRoutes.js";
import PostRouter from "./routes/postRoutes.js";



import dotenv from 'dotenv';
dotenv.config();




// Middleware imports;
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleWare from "./middleware/not-found.js";
import { authenticateUser } from "./middleware/auth.js";
import NotificationRouter from "./routes/notificationRoutes.js";





app.get('/',(req , res) =>{
    res.json({msg :"Welcome!"});
})


// middleware
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

if(process.env.NODE_ENV != 'production'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post",authenticateUser,PostRouter);
app.use("/api/v1/notification", authenticateUser, NotificationRouter);

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