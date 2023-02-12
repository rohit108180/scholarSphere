import React, { useState } from "react";
import Wrapper from "../../css/wrapper/Post";
import TrendingSidebar from "../../component/TrendingSidebar";

export const viewpost = () => {
  const { loadPost } = useAppcontext();
  const [project, setProject] = useState({
    title: "",
    description: "",
    sdate: "",
    edate: "",
    tools: "",
    github_link: "",
    dlink: "",
  });

  useEffect(() => {
    loadPost();
  }, []);
  return (
    <Wrapper>
      <div>
        <div>
          <h4>
            <b>{project.title}</b>
          </h4>
          <label>
            Description
            <textarea name="description" placeholder={project.description} />
          </label>
          <label>
            Start Date: {project.sdate}
            <br />
            End Date: {project.edate}
          </label>
          <label>
            Tools used
            <input type="text" name="tools_used" placeholder={project.tools} />
          </label>
          <label>
            Deployed Link
            <input type="text" name="dlink" placeholder={project.dlink} />
          </label>
          <label>
            Github Link
            <input
              type="text"
              name="github_link"
              placeholder={project.github_link}
            />
          </label>
          <br />
        </div>
        <div className="trending-sidebar">
          <TrendingSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
