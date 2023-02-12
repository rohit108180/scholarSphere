// @ts-nocheck
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import main from "../assets/images/main.svg";
import { Logo } from "../component";
import Wrapper from "../css/wrapper/Landing";
import img from "../assets/images/bg.jpg"

export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <Wrapper>
      <img src={img} alt="" className="imgg"/>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h2>
            <span style={{color :"whitesmoke"}}> Inspiring </span><span>Student</span><span style={{color :"whitesmoke"}}> Innovation</span>
          </h2>
          <p style={{color:"white", fontSize:"1.3rem"}}>
          Join us in celebrating the power and potential of college students and their contributions to the academic community. Discover their innovative ideas and research, all in one convenient platform.
          </p>
          <button className="btn btn-hero" onClick={handleClick}>
            Login/Register
          </button>
        </div>
        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
