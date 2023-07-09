import mongoose from "mongoose";
import User from "./User.js";

// Notification Metadata
const notificationMetadataSchema = mongoose.Schema({
  varName: { type: String, required: true },
  displayStr: { type: String, required: true },
  relUrl: { type: String, required: true },
});

// Notification Instance
const notificationInstanceSchema = mongoose.Schema({
  notificationType: { type: mongoose.Types.ObjectId, ref: "NotificationType" , required: true },
  notifiedFromUser: { type: mongoose.Types.ObjectId, ref: "User" , required: true },
  notifiedToUser:{ type: mongoose.Types.ObjectId, ref: "User" , required: true },
  notificationMetadata: [{ type: [notificationMetadataSchema], required: true }],
  createdAt:{ 
    type: Date,
  default: Date.now
}

});

// Notification Type
const notificationTypeSchema = mongoose.Schema({
  notificationName: { type: String, required: true },
  displayFormatString: { type: String, required: true },
});

const NotificationMetadata = mongoose.model(
  "NotificationMetadata",
  notificationMetadataSchema
);
const NotificationInstances = mongoose.model(
  "NotificationInstances",
  notificationInstanceSchema
);
const NotificationType = mongoose.model(
  "NotificationType",
  notificationTypeSchema
);

export { NotificationMetadata, NotificationInstances, NotificationType };
