import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controller/postController.js";
const PostRouter = express.Router();

PostRouter.route("/").post(createPost).get(getAllPosts);

// it's important to place stats before id because stats can be considered as id;
PostRouter.route("/:id").delete(deletePost).patch(updatePost);

export default PostRouter;
