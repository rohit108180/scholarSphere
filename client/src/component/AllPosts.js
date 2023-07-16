import React from "react";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/Allposts";
import PostCard from "./PostCard";
import { PostCardShimmer } from "./Shimmers/PostCardShimmer";

export const AllPosts = () => {
  const { posts, isLoading } = useAppcontext();
  return (
    <Wrapper>
      <div className="post-cards">
      {isLoading &&
      <div><PostCardShimmer/>
      <PostCardShimmer/>
      <PostCardShimmer/></div>}

      {posts.map((post) => {
        return <PostCard post= {post} key = {post._id}/>;
      })}
      </div>
    </Wrapper>
  );
};
