import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../utils/links.js";
import { useAppcontext } from "../context/appContext.js";
import mixpanel from 'mixpanel-browser';
import { track } from "../usage-tracking.js";
export const Navlinks = () => {

  const {displayAlert} = useAppcontext();
  function clickedLink(e, link) {
    track(`Clicked on navlink ${link?.text}`)
    // if (link?.locked){
    //     e.preventDefault();
    //     displayAlert("Feature coming soon", "info");
    // }
  }
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, path, text, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={(e) => clickedLink(e, link)}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
