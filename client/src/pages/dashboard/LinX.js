import React, { useEffect } from "react";
import { AllLinXPosts, FormRow, Navbar, ProfileIcon } from "../../component";
import TrendingSidebar from "../../component/TrendingSidebar";
import { useAppcontext } from "../../context/appContext";
import Wrapper from "../../css/wrapper/Feed";
import { SharedLayer } from "./SharedLayer";

export const LinX = () => {

  const {loadAllLinXPosts} = useAppcontext();

  useEffect(() => {
    loadAllLinXPosts();
  }, [])
  
  return (
    <Wrapper>
      <SharedLayer>
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
