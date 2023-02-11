import React from "react";
import { AllPosts, FormRow, ProfileIcon } from "../../component";
import TrendingSidebar from "../../component/TrendingSidebar";
import Wrapper from "../../css/wrapper/Feed";

export const Feed = () => {
  return (
    <Wrapper>
      <div className="feed-page">
        <div className="posts">
          <div className="post-something">
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
          {/* <div className="sort-by">
            <hr/>
            <span>sort by</span>
            <div>recent</div>
            <div className="dropdown show-dropdown">time</div>

          </div> */}

            <hr className="hr"/>

            <AllPosts/>
        </div>
        <div className="trending-sidebar">
          <TrendingSidebar/>
        </div>
      </div>
    </Wrapper>
  );
};
