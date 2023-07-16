import { HttpStatusCode } from "axios";

import { createNotificationTypeManager, getNotificationTypeManager, getNotificationsManager } from "../manager/notificationManager.js";

const getNotifications = async (req, res) => {

    const userId = req.user.userID;

    console.log("userId", userId);

    const {notifications, error}  = await getNotificationsManager(userId);

    if(error){
        res.status(error.status).json({message: error.message});
    }


    return res.status(HttpStatusCode.Ok).json({notifications});
}


const getNotificationType = async (req, res) => {

    const {type} = req.query;

    if(!type){
        res.status(HttpStatusCode.BadRequest).json({message: "notification type is missing"});
    }

    const {notificationType, error}  = await getNotificationTypeManager(type);

    if(error){
        res.status(error.status).json({message: error.message});
    }


    return res.status(HttpStatusCode.Ok).json({notificationType});
}

const createNotification = async (req, res) => {

    return res.status(200).json({message: "notification successfully created"});
}


const createNotificationType = async (req, res) => {

    const {notificationName, displayFormatString} = req.body;

    if(!notificationName || !displayFormatString){
        res.status(HttpStatusCode.BadRequest).json({message: "Please provide all the fields"});
    }

    const {notificationType,error} = createNotificationTypeManager(notificationName, displayFormatString);

    if(error){
        res.status(error.status).json({message: error.message});
    }

    return res.status(200).json({message: "notification Type successfully created", notificationType});
}



const deleteNotification = async (req, res) => {
    return res.status(HttpStatusCode.Ok).json({message: "deleting notification successfully"});
}


export {
  createNotification,
  createNotificationType,
  getNotifications,
  getNotificationType,
  deleteNotification,
};
