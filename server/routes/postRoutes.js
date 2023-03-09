import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getMyPosts,
  updatePost,

} from "../controller/postController.js";
const PostRouter = express.Router();

PostRouter.route("/").post(createPost).get(getAllPosts);
PostRouter.route("/myposts").get(getMyPosts);

// it's important to place stats before id because stats can be considered as id;
PostRouter.route("/:id").delete(deletePost).patch(updatePost);

export default PostRouter;
