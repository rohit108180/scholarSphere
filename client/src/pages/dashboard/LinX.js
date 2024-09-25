import React, { useEffect } from "react";
import { AllLinXPosts, FormRow, Navbar, ProfileIcon } from "../../component";
import TrendingSidebar from "../../component/TrendingSidebar";
import { useAppcontext } from "../../context/appContext";
import Wrapper from "../../css/wrapper/Feed";
import { SharedLayer } from "./SharedLayer";

export const LinX = () => {

  const {loadAllLinXPosts, linXPosts} = useAppcontext();

  useEffect(() => {
    loadAllLinXPosts();
  }, [])
  let todaysPost =  linXPosts.filter(post => {
    const today = new Date();
    const postDate = new Date(post.createdAt);
    return postDate.toDateString() === today.toDateString();
  })?.length;
  return (
    <Wrapper>
      <SharedLayer>
        { Boolean(todaysPost) &&
          <div style={{width:"100%", height: "25px", textAlign:"center", color:"white", backgroundColor:"green"}}> Added {todaysPost} new posts today </div>
        }
        <div className="feed-page">
          <div className="posts">
            {/* <div className="post-something">
              <ProfileIcon />
              <input
                type="text"
                // value={value}
                name="post"
                // onChange={handleChange
                className="form-input"
                placeholder="post something ..."
              />
              <button type="button" className="btn">
                Post
              </button>
            </div>
        
              <hr className="hr"/> */}

              <AllLinXPosts/>
          </div>
          {/* <div className="trending-sidebar">
            <TrendingSidebar/>
          </div> */}
        </div>
      </SharedLayer>
    </Wrapper>
  );
};
