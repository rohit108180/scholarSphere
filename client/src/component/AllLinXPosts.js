import React, { useState } from "react";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/Allposts";
import LinXPostCard from "./LinXPostCard";
import { PostCardShimmer } from "./Shimmers/PostCardShimmer";
import { Checkbox, FormControlLabel } from "@mui/material";
import { track } from "../usage-tracking";

export const AllLinXPosts = () => {
  const { linXPosts, isLoading } = useAppcontext();
  const [showLiked, setShowLiked] = useState(false);

  const likedPosts = localStorage.getItem("likedPosts");
  return (
    <Wrapper>
      <div className="post-cards" style={{ width: "100%", maxWidth: "40rem" }}>
        {isLoading ? (
          <div>
            Only for people who know the pain for serverless coldstart...
            <PostCardShimmer />
            <br />
            <PostCardShimmer />
            <br />
            <PostCardShimmer />
          </div>
        ) : (
          <>
            <FormControlLabel
              control={<Checkbox checked={showLiked}
              onChange={() =>{ track("Show Licked Clicked", {showLiked: !showLiked}); setShowLiked(!showLiked)}} />}
              label="SHOW LIKED POSTS"
            />
            {linXPosts.map((post) => {
              if (post?.poster_bio?.includes("followers") || (showLiked && !likedPosts.includes(post?._id))) return null;
              return <LinXPostCard post={post} key={post._id} />;
            })}
          </>
        )}
      </div>
    </Wrapper>
  );
};
