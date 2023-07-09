import React from "react";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/Allposts";
import PostCard from "./PostCard";

export const AllPosts = () => {
  const { posts } = useAppcontext();
  return (
    <Wrapper>
      {posts.map((post) => {
        return <PostCard post= {post} key = {post._id}/>;
      })}
    </Wrapper>
  );
};
