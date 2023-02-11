import React, { useState } from "react";
import Wrapper from "../../css/wrapper/AddProjectPaper";

export const AddProjectPaper = () => {
  const [currentView, setCurrentView] = useState("project");

  const handleToggleView = () => {
    setCurrentView(currentView === "project" ? "research" : "project");
  };
  return (
    <Wrapper>
      <div>
        <button class="toggle" onClick={handleToggleView}>
          Project/Research
        </button>
        {currentView === "project" ? <div>View 1</div> : <div>View 2</div>}
      </div>
    </Wrapper>
  );
};
