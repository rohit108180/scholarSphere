import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../utils/links.js";
import { useAppcontext } from "../context/appContext.js";

export const Navlinks = () => {

  const {displayAlert} = useAppcontext();
  function clickedLink(e, locked) {
    if (locked){
        e.preventDefault();
        displayAlert("Feature coming soon", "info");
    }
  }
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, path, text, icon, locked } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={(e) => clickedLink(e, locked)}
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
