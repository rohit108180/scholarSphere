import mongoose from "mongoose";
import User from "./User.js";

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    type: {
      type: String,
      enum  : ['Post', 'Paper', "Project"],
      default: "Post",
    },

    live_link: { type: String, default: "" },
    github_link: { type: String, default: "" },
    research_paper_link: { type: String, default: "" },
    image: String,
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    views: Number,
    comment: [
      {
        _id: String,
        comment_message: {
          type: String,
          required: true,
        },
        created_by: {
          type: mongoose.Types.ObjectId,
          ref: "User",
          required: true,
        },
        replies: [
          {
            reply_id: String,
            reply_message: String,
            date: Date,
            replied_by: {
              type: mongoose.Types.ObjectId,
              ref: "User",
            },
          },
        ],
      },
    ],
    toolsUsed : String,
    description: String,
    createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
    contributors: [{ type: mongoose.Types.ObjectId, ref: "User" }],

    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
