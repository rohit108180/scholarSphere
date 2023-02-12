import React from "react";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/Allposts";
import PostCard from "./PostCard";

export const AllPosts = () => {
  const { allPosts } = useAppcontext();
  return (
    <Wrapper>
      {allPosts.map((post) => {
        return <PostCard post= {post} id = {post._id}/>;
      })}
    </Wrapper>
  );
};
