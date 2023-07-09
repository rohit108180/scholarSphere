import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
  likePost,
  addComment,
  deleteComment

} from "../controller/postController.js";
const PostRouter = express.Router();

PostRouter.route("/").post(createPost).get(getPosts);
PostRouter.route("/:postId/like").post(likePost);

PostRouter.route("/:postId/comment").post(addComment).delete(deleteComment)

// PostRouter.route("/myposts").get(getMyPosts);

// it's important to place stats before id because stats can be considered as id;
PostRouter.route("/:Id").delete(deletePost).patch(updatePost);


export default PostRouter;
