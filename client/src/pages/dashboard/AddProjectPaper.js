import React, { useState } from "react";
import { Alert } from "../../component";
import { useAppcontext } from "../../context/appContext";
import Wrapper from "../../css/wrapper/AddProjectPaper";


const initialState = {
  title: "",
  tagline: "",
  type: "Project",
  live_link: "",
  github_link: "",
  research_paper_link: "",
  description: "",
  toolsUsed: "",
  image: undefined,
};

export const AddProjectPaper = () => {
  const { newPost, showAlert, isLoading } = useAppcontext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [post, setpost] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(undefined);

  const handleChange = (event) => {
    if (event.target.name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log("read image", reader.result);
          setImagePreview(reader.result);

          const newPost = {
            ...post,
            image: reader.result,
          };

          console.log(newPost);

          setpost(newPost);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setpost({
        ...post,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    setTimeout(() => {
      scrollToTop();
    }, 300);
    newPost(post);
    console.log(post);
    
  };
  return (
    <Wrapper>
      <div>
        <form>
          <h2>POST</h2>
          {showAlert && <Alert />}
          <label>
            Title
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleChange}
              placeholder="This is my first Post..."
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={post.description}
              onChange={handleChange}
              placeholder="The project/Paper comprises of ......"
            />
          </label>

          <label>
            Add Image
            <input

              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => handleChange(e)}
              style={{display: "block", margin:"10px"}}
            ></input>
            {imagePreview &&
          <img
            alt="Profile Image"
            src={imagePreview}
            width="100%"
            padding="10px"
            margin = "10px"
            ></img>
            }
          </label>
          <React.Fragment>
            <input
              type="radio"
              name="type"
              value="Project"
              checked={post.type === "Project"}
              onChange={handleChange}
              className="radio"
            />{" "}
            Project
            <input
              type="radio"
              name="type"
              value="Paper"
              checked={post.type === "Paper"}
              onChange={handleChange}
              className="radio"
            />
            Paper
          </React.Fragment>

          <br />
          <hr />
          {post.type === "Project" ? (
            <React.Fragment>
              <label>
                Tools used
                <input
                  type="text"
                  name="toolsUsed"
                  value={post.toolsUsed}
                  onChange={handleChange}
                  placeholder="The tech stack i have used in this project..."
                />
              </label>
              <label>
                Deployed Link
                <input
                  type="text"
                  name="live_link"
                  value={post.live_link}
                  onChange={handleChange}
                  placeholder="The Project is live on this link "
                />
              </label>
              <label>
                Github Link
                <input
                  type="text"
                  name="github_link"
                  value={post.github_link}
                  onChange={handleChange}
                  placeholder="The Github link for the project is"
                />
              </label>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <label>
                Published Link:
                <input
                  type="text"
                  name="research_paper_link"
                  value={post.research_paper_link}
                  onChange={handleChange}
                  placeholder="My paper is published here"
                />
              </label>

              <label>
                Domain
                <input
                  type="text"
                  name="toolsUsed"
                  value={post.toolsUsed}
                  onChange={handleChange}
                  placeholder="I have done this project in this particular domain"
                />
              </label>
            </React.Fragment>
          )}

          <br />

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn"
            disabled={isLoading}
          >
            Post
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
