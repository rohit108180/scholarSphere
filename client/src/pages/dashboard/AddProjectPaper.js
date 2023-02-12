import React, { useState } from "react";
import Wrapper from "../../css/wrapper/AddProjectPaper";

export const AddProjectPaper = () => {
  const [currentView, setCurrentView] = useState("project");

  const handleToggleView = () => {
    setCurrentView(currentView === "project" ? "research" : "project");
  };

  const [research, setResearch] = useState({
    title: "",
    description: "",
    authors: "",
    gs_link: "",
    field: "",
  });

  const handleChangeresearch = (event) => {
    setResearch({
      ...research,
      [event.target.name]: event.target.value,
    });
  };
  const [project, setProject] = useState({
    "title": "my second postt",
    "tagline" : "",
    "type": "Paper",
    "live_link": "",
    "github_link": "",
    "research_paper_link": "",
    "description": "",

  });

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code for posting the project goes here
    console.log(project);
  };
  return (
    <Wrapper>
      <div>
        {currentView === "project" ? (
          <div>
            <form onSubmit={handleSubmit}>
              <h4>
                POST
              </h4>
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={handleChange}
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={project.description}
                  onChange={handleChange}
                />
              </label>
              <label>
                Start Date
                <input
                  type="date"
                  name="start_date"
                  value={project.sdate}
                  onChange={handleChange}
                />
                End Date
                <input
                  type="date"
                  name="end_date"
                  value={project.edate}
                  onChange={handleChange}
                />
              </label>
              <label>
                Tools used
                <input
                  type="text"
                  name="tools_used"
                  value={project.tools}
                  onChange={handleChange}
                />
              </label>
              <label>
                Deployed Link
                <input
                  type="text"
                  name="dlink"
                  value={project.dlink}
                  onChange={handleChange}
                />
              </label>
              <label>
                Github Link
                <input
                  type="text"
                  name="github_link"
                  value={project.github_link}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Post Project</button>
            </form>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <h4>
                <b>RESEARCH</b>
              </h4>
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={handleChange}
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={project.description}
                  onChange={handleChange}
                />
              </label>
              <label>
                Authors
                <input
                  type="text"
                  name="authors"
                  value={project.authors}
                  onChange={handleChange}
                />
              </label>
              <label>
                Field
                <input
                  type="text"
                  name="field"
                  value={project.field}
                  onChange={handleChange}
                />
              </label>
              <label>
                Google Scholar Link
                <input
                  type="text"
                  name="gs_link"
                  value={project.gs_link}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Publish Research</button>
            </form>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
