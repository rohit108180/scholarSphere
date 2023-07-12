import { Error } from "../models/Error.js";
import { HttpStatusCode } from "axios";
import { NotificationInstances, NotificationType } from "../models/Notification.js";

const getNotificationsManager = async (userId)=>{
    if(!userId){
        const error = new Error({
            status: HttpStatusCode.BadRequest,
            message: "UserId not found in getNotificationsManager "
        });
    
        return {error};
    }


    const notifications = await NotificationInstances.find({notifiedToUser: userId}).sort({date: -1}).populate(['notificationTypeId',  'notifiedFromUser','notifiedToUser']);

    return {notifications};
}


const getNotificationTypeManager = async (type)=>{
    if(!type){
        const error = new Error({
            status: HttpStatusCode.BadRequest,
            message: "type not found in getNotificationTypeManager "
        });
    
        return {error};
    }


    const notificationType = await NotificationType.findOne({notificationName: type})

    if(notificationType.length == 0){
        const error = new Error({
            status: HttpStatusCode.NotFound,
            message: "type not found in the database "
        });
    
        return {error};
    }

    return {notificationType};
}



const createNotificationInstanceManager = async(notificationTypeName,notifiedFromUserId, notifiedToUserId, notificationMetadata)=>{


    if(!notificationTypeName || !notifiedToUserId || !notificationMetadata){
        const error = new Error({
            status: HttpStatusCode.BadRequest,
            message: "Missing fields in createNotificationInstanceManager"
        });

        console.log(error.message);
        return {error};
    }
 
    const {notificationType, error} = await getNotificationTypeManager(notificationTypeName);



    if(error){

        console.log(error.message);
        return {error};

    }

    console.log("notificationType", notificationType);

    const notificationInstanceTemp =  {
        notificationType : notificationType._id, notifiedFromUserId: notifiedFromUserId, notifiedToUserId , 
        notificationMetadata
    }

    console.log("notification InstanceTemp", notificationInstanceTemp);
    const notificationInstance = await 
    NotificationInstances.create(notificationInstanceTemp);



    if(!notificationInstance){
    const error = new Error({
            status: HttpStatusCode.BadRequest,
            message: "Missing fields in createNotificationInstanceManager"
        });
        console.log(error.message);
        return {error};
    }

    console.log("notificationInstance", notificationInstance.notificationMetadata); 



    return {notificationInstance};
}


const createNotificationTypeManager = async(notificationName, displayFormatString)=>{
    if(!notificationName || !displayFormatString){
        const error = new Error({
            status: HttpStatusCode.BadRequest,
            message: "Missing fields in createNotificationTypeManager"
        });
    
        return {error};
    }

    const notificationType = await NotificationType.create({
        notificationName, displayFormatString
    })

    return {notificationType};
}



export {
    getNotificationsManager, 
    getNotificationTypeManager,
    createNotificationInstanceManager,
    createNotificationTypeManager

}