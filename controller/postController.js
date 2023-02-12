import Post from '../models/Post.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

import mongoose from 'mongoose';
import moment from 'moment';


const createPost = async (req, res) => { 
  const { title, description } = req.body;

  if (!title || !description) {
    throw new BadRequestError('Please provide all required values');
  } 

  req.body.createdBy = req.user.userID;
  const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post });
};
 

const getAllPosts = async (req, res) => {
  const { status, PostType, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userID,
  };
  // add stuff based on condition

  if (status && status !== 'all') {
    queryObject.status = status;
  }
  if (PostType && PostType !== 'all') {
    queryObject.PostType = PostType;
  }
  if (search) {
    queryObject.title = { $regex: search, $options: 'i' };
  }
  // NO AWAIT

  let result = Post.find(queryObject);

  // chain sort conditions

  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('title');
  }
  if (sort === 'z-a') {
    result = result.sort('-title');
  }

  //

  // setup pagination
//   const page = Number(req.query.page) || 1;
//   const limit = Number(req.query.limit) || 10;
//   const skip = (page - 1) * limit;

//   result = result.skip(skip).limit(limit);

  const Posts = await result;

//   const totalPosts = await Post.countDocuments(queryObject);
//   const numOfPages = Math.ceil(totalPosts / limit);

//   res.status(StatusCodes.OK).json({ Posts, totalPosts, numOfPages });
  res.status(StatusCodes.OK).json({ Posts});
};


const updatePost = async (req, res) => {
  const { id: PostId } = req.params;
  const { description, title } = req.body;

  if (!title || !description) {
    throw new BadRequestError('Please provide all values');
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

  res.status(StatusCodes.OK).json({ msg: 'Success! Post removed' });
};
   
export { createPost, deletePost, getAllPosts, updatePost };
