import React from "react";
import Wrapper from "../css/wrapper/TrendingSidebar";
import { MdQueryStats } from "react-icons/md";
import { ProfileIcon } from "./ProfileIcon";
import {  Typography } from "@mui/material";
// import Badge from 'react-bootstrap/Badge';

function TrendingSidebar() {

  return (
    <Wrapper>
      <div className="trending-sidebar-container">
        <div className="trending-heading">
          {" "}
          <MdQueryStats /> Trending post
        </div>
        <div className="trending-posts">
          <div className="trending-post-card" alignItems="flex-start">
            <ProfileIcon />

            <div className="trending-post-content">
              <div className="card-heading"> Summer BBQ </div>

              <div className="subtitle">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town "}
              </div>
            </div>
          </div>
          <div className="trending-post-card" alignItems="flex-start">
            <ProfileIcon />

            <div className="trending-post-content">
              <div className="card-heading"> Summer BBQ </div>

              <div className="subtitle">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town "}
              </div>
            </div>
          </div>
          <div className="trending-post-card" alignItems="flex-start">
            <ProfileIcon />

            <div className="trending-post-content">
              <div className="card-heading"> Rohit Sharma</div>

              <div className="subtitle">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town "}
              </div>
            </div>
          </div>
          <div className="trending-post-card" alignItems="flex-start">
            <ProfileIcon />

            <div className="trending-post-content">
              <div className="card-heading"> Summer BBQ </div>

              <div className="subtitle">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default TrendingSidebar;
