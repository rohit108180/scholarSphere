import React from "react";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/Allposts";
import LinXPostCard from "./LinXPostCard";
import { PostCardShimmer } from "./Shimmers/PostCardShimmer";

export const AllLinXPosts = () => {
  const { linXPosts, isLoading } = useAppcontext();
  return (
    <Wrapper>
      <div className="post-cards"style={{width:"100%", maxWidth:"40rem"}}>
      {isLoading &&
      <div >
        Only for people who know the pain for serverless coldstart...
        <PostCardShimmer/><br/>
      <PostCardShimmer/><br/>
      <PostCardShimmer/></div>}

      {linXPosts.map((post) => {
        if(post?.poster_bio?.includes("followers"))return null;
        return <LinXPostCard post= {post} key = {post._id}/>;
      })}
      </div>
    </Wrapper>
  );
};
