import React, { useState } from "react";
import Wrapper from "../css/wrapper/Navbar";

import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Logo } from "./Logo";
import { useAppcontext } from "../context/appContext";

export const Navbar = () => {
  const {user, logoutUser, toggleSidebar } = useAppcontext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => toggleSidebar()}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo/>
          <h3 className="logo-text">Dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={()=> setShowLogout(!showLogout)}>
            <FaUserCircle/>
            {user?.name}
            <FaCaretDown/>
          </button>
          <div className={showLogout?"dropdown show-dropdown" : "dropdown"}>
            <button
            className="dropdown-btn"
            onClick={()=>logoutUser()}>
              Logout
            </button>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};
