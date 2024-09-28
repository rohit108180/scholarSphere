import React, { useEffect, useRef, useState } from "react";
import { AllLinXPosts, FormRow, Navbar, ProfileIcon } from "../../component";
import TrendingSidebar from "../../component/TrendingSidebar";
import { useAppcontext } from "../../context/appContext";
import Wrapper from "../../css/wrapper/Feed";
import { SharedLayer } from "./SharedLayer";
import { track } from "../../usage-tracking";

export const LinX = () => {

  const {loadAllLinXPosts, linXPosts, saveLinXPost} = useAppcontext();
  const [postForm, setPostForm] = useState(false);

  const postSomethingSummaryRef = useRef(null);
  const postSomethingRef = useRef(null);

  const handleChange = (e) =>{
    track("Input : Post something", {link: postSomethingRef.current.value, summary : postSomethingSummaryRef?.current?.value})
  }

  const submitPost = async () =>{
    track("Clicked post something button");
    let post = {
      poster: "Anonymous",
      summary: `A user added an opportunity : \n ${postSomethingSummaryRef.current.value}`,
      feed_html: `<p>${postSomethingSummaryRef.current.value}</p><a href=${postSomethingRef.current.value}>${postSomethingRef.current.value}</a>`,
      createdAt: new Date(),
      poster_bio:"Building scholar sphere",
      status: "QUALIFIED"
    }

    await saveLinXPost(post);
    
    postSomethingRef.current.value = null;
    postSomethingSummaryRef.current.value = null;

  }

  useEffect(() => {
    track("Loaded Linx")
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
            <div className={`post-something ${postForm? "expanded":""}`} onClick={() =>postForm || setPostForm(true)}>
              {postForm && 
              <h3>Post Anonymously</h3>}
              <input
                type="text"
                ref={postSomethingSummaryRef}
                name="post"
                onChange={handleChange}
                className="form-input"
                placeholder = {postForm ?"Give a small summary for the opportunity" : "Post something..."}
              />
              {postForm && 
              <input
                type="text"
                ref={postSomethingRef}
                name="post"
                onChange={handleChange}
                className="form-input"
                placeholder={postForm ?"Link for this opportunity" : "Post something..."}
              />}
              <button type="button" className="btn" onClick={submitPost}>
                Post
              </button>
            </div>
        
              <hr className="hr"/>

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
