import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/SmallSidebar";
import { Logo } from "./Logo";
import { Navlinks } from "./Navlinks";

export const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useAppcontext();
  return (
    <Wrapper>
      <div className={showSidebar? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => toggleSidebar()}
          >
            <FaTimes />
          </button>
          <header>
            <Logo/>
          </header>
          <Navlinks  toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  );
};
