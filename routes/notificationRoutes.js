import express from "express";
import {
  createNotification,
  deleteNotification,
  getNotifications,
  createNotificationType,

} from "../controller/notificationController.js";
import { getNotificationType } from "../controller/notificationController.js";
const NotificationRouter = express.Router();

NotificationRouter.route("/").post(createNotification).get(getNotifications);
NotificationRouter.route("/type").post(createNotificationType).get(getNotificationType);


NotificationRouter.route("/:notificationId").delete(deleteNotification)


export default NotificationRouter;
