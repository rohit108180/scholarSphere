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
        It may take a minute for the first cold start ...
        <PostCardShimmer/><br/>
      <PostCardShimmer/><br/>
      <PostCardShimmer/></div>}

      {linXPosts.map((post) => {
        return <LinXPostCard post= {post} key = {post._id}/>;
      })}
      </div>
    </Wrapper>
  );
};
