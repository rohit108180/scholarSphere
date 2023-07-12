import Post from "../models/Post.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

import { uuid } from "uuidv4";
import { v2 as cloudinary } from "cloudinary";
import User from "../models/User.js";
import { createNotificationInstanceManager } from "../manager/notificationManager.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});



const createPost = async (req, res) => {
  let newPost = req.body;
  const { title, description, image } = newPost;

  if (!title || !description) {
    throw new BadRequestError("Please provide all required values");
  }

  if (image) {

    const result = await cloudinary.uploader.upload(
      image,
      {
        folder: "ScholarSphere/Posts",
        width: 1500,
        crop: "scale",
      },
      function (error) {
        if (error) {
          console.log(error);
          res.status(400).json({ error });
        }
      }
    );

    
     newPost.image=
      result.secure_url;
  }
  req.body.createdBy = req.user.userID;
  const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post });
};

const getPosts = async (req, res) => {
  const { userId, status, postType, sort, search } = req.query;

  let queryObject = {};

  // Filter by status (if provided)
  if (status) {
    queryObject.status = status;
  }

  // Filter by postType (if provided)
  if (postType) {
    queryObject.type = postType;
  }

  // Search by title (if provided)
  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }
  // Filter by userid (if provided)
  if (userId) {
    queryObject.createdBy = userId;
  }

  let sortObject = {};

  // Sort by date (if provided)
  if (sort === "oldest") {
    sortObject.date = 1;
  } else {
    sortObject.date = -1; // default to newest
  }

  try {
    const posts = await Post.find(queryObject).sort(sortObject).populate('createdBy');

    
    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

const updatePost = async (req, res) => {
  const { id: PostId } = req.params;
  const { description, title } = req.body;

  if (!title || !description) {
    throw new BadRequestError("Please provide all values");
  }
  const Post = await Post.findOne({ _id: PostId });

  if (!Post) {
    throw new NotFoundError(`No Post with id :${PostId}`);
  }
  // check permissions

  checkPermissions(req.user, Post.createdBy);

  const updatedPost = await Post.findOneAndUpdate({ _id: PostId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedPost });
};
const deletePost = async (req, res) => {
  const { id: PostId } = req.params;

  const Post = await Post.findOne({ _id: PostId });

  if (!Post) {
    throw new NotFoundError(`No Post with id :${PostId}`);
  }

  checkPermissions(req.user, Post.createdBy);

  await Post.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Post removed" });
};

const likePost = async (req, res) => {
  const postId = req.params.postId;

  console.log(req.params);
  console.log(postId);

  const userId = req.user.userID;

  if (!postId) {
    return res.status(400).json({ message: "provide all the fields" });
  }

  try {
    // Check if the user has already liked the post

    const post = await Post.findOne({ _id: postId });

    console.log(post?.likes);

    const idx = post.likes.findIndex((item) => item == userId);
    if (idx != -1) {
      // User has already liked the post, so remove the like (dislike)

      post.likes = post.likes.filter((item) => item != userId);

      console.log("post after deleting the like", post);
      await post.save();

      console.log(post.likes);

      return res
        .status(200)
        .json({ isLiked: false, message: "Post disliked successfully." });
    }

    // User has not liked the post yet, so create a new like

    post.likes.push(userId);
    await post.save();



    // creating post liked notification 

    let notificationMetadata = [];

    // metadata for user who liked the post

    const user = await User.findOne({ _id: userId});

    notificationMetadata.push({
      varName: "user",
      displayStr: `${user?.name} ${user?.lastname}`,
      relUrl:  `/user/${userId}`,
    })

    // Metadata for post
    notificationMetadata.push({
      varName: "postTitle",
      displayStr: post?.title || "",
      relUrl:  `/post/${postId}`

    })

    const {error} = await createNotificationInstanceManager("LIKED_POST", null, post?.createdBy, notificationMetadata);

    if(error){
      console.log(error);
      return res.status(201)
      .json({ isLiked: true, message: "Post liked successfully.", error: error.message });
    }

    return res
      .status(201)
      .json({ isLiked: true, message: "Post liked successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const addComment = async (req, res) => {
  const { commentMessage,  level, commentId } = req.body;

  const postId = req.params.postId;

  const userId = req.user.userID;
  if (!postId || !commentMessage || !level) {
    return res.status(400).json({ message: "Please provide all the fields" });
  }

  if (level == 2 && !commentId) {
    return res
      .status(400)
      .json({ message: "Please provide commentId for replies" });
  }

  let post = await Post.find({ _id: postId }).populate("createdBy");
  post = post[0];

  if (!post) {
    throw new NotFoundError(`No Post with id :${postId}`);
  }

  let newComment;
  if (level == 1) {
    newComment = {
      comment_id: uuid(),
      comment_message: commentMessage,
      created_by: userId,
      replies: [],
    };
    // console.log(newComment);
    // console.log(post);
    // console.log(post.comments);
    post.comments.push(newComment);
    console.log(post);
  } else if (level == 2) {
    const newReply = {
      reply_id: uuid(),
      reply_message: commentMessage,
      replied_by: userId,
    };
    let flag = 0;
    for (let i = 0; i < post.comments.length; i++) {
      if (post.comments[i].comment_id == commentId) {
        // console.log(post.comments[i].id);
        flag = 1;
        post.comments[i].replies.push(newReply);
        break;
      }
    }
    console.log(post);

    if (!flag) {
      throw new NotFoundError(
        `No Comment with id :${commentId} in the post with id :${postId}`
      );
    }
  }
  await post.save();
  console.log("new comment", newComment)
  return res.status(200).json({ message: "Comment successfully added", post });
};

const deleteComment = async (req, res) => {};

export {
  createPost,
  deletePost,
  getPosts,
  updatePost,
  likePost,
  addComment,
  deleteComment,
};
