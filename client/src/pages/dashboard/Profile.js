import React, { useState } from "react";
import { Alert } from "../../component";
import Wrapper from "../../css/wrapper/Profile";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FaGithub, FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useAppcontext } from "../../context/appContext";
import { CircularProgress } from "@mui/material";

const style = {
  bgcolor: "#f0f4f8",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  maxheight: "50rem",
  maxWidth: "60rem",
  width: "100%",
  display: "flex",
  top: "50%",
  flexDirection: "column",
  alignItems: "center",
  margin: "2rem",
  // backgroundColor: "black",
};

export const Profile = () => {
  const { user,isLoading, updateProfile } = useAppcontext();
  console.log(user);
  const [state, setState] = useState({ ...user });
  const [avatarPreview, setAvatarPreview2] = useState(undefined);
  const [alignment, setAlignment] = React.useState("research");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange2 = (event) => {
    if (event.target.name === "profileImage") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log("read image", reader.result);
          setAvatarPreview2(reader.result);

          const newState = {
            ...state,
            profilePhoto: reader.result,
          };

          console.log(newState);

          setState(newState);
          console.log("setted state", newState);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(state);
    setAvatarPreview2(null);
    console.log(state);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Wrapper>
      <div class="main">
        {user.profilePicture && (
          <div class="profile">
            <img
              class="user-image"
              src={user?.profilePicture?.url}
              alt={user.name}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        <div class="user-info">
          <div class="about">
            <div>
              {user.name} {user.lastname} &nbsp;&nbsp;&nbsp;{" "}
              <span style={{ color: "grey" }}>({user.role})</span>
              <br></br>
              <span>
                Email:{" "}
                <a style={{ color: "#0072b1" }} href={`mailto:{user.email}`}>
                  {user.email}
                </a>
              </span>
              <br></br>

              {user.githubLink &&
              <a
                style={{ fontSize: "1.5rem", color: "black" }}
                href={user.githubLink}
                target="_blank"
              >
                {" "}
                <FaGithub></FaGithub>{" "}
              </a>
              }
              {user.instagram && 
              <a
                style={{ fontSize: "1.5rem", color: "#C13584" }}
                href={user.intstagram}
                target="_blank"
              >
                {" "}
                <FaInstagram></FaInstagram>{" "}
              </a>
              }
              {user.linkedIn &&
              <a
                style={{ fontSize: "1.5rem", color: "#0072b1" }}
                href={user.linkedIn}
                target="_blank"
              >
                {" "}
                <FaLinkedin></FaLinkedin>{" "}
                
              </a>
              }
            </div>
            <div>
              <div>
                <Button onClick={handleOpen} className="btn">
                  Edit Profile
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  style={{
                    padding: "1rem",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowY: "scroll",
                  }}
                >
                  <Box sx={style}>
                    <Typography sx={{ m: 3 }} variant="h3" component="h2">
                      Edit your profile
                    </Typography>

                    <Typography sx={{ mt: 2 }}>
                      <TextField
                        style={{ padding: "0.2rem", width: "100%" }}
                        value={state.name}
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        name="name"
                        onChange={handleChange2}
                        required
                        auto-validate
                        // disabled={true}
                        margin="dense"
                      />

                      <TextField
                        style={{ padding: "0.2rem", width: "100%" }}
                        value={state.userBio}
                        id="standard-basic"
                        label="Bio"
                        variant="standard"
                        name="userBio"
                        onChange={handleChange2}
                        margin="dense"
                        multiline
                      />
                      <TextField
                        style={{ padding: "0.2rem", width: "100%" }}
                        value={state.githubLink}
                        id="standard-basic"
                        label="Github Link"
                        variant="standard"
                        name="githubLink"
                        onChange={handleChange2}
                        margin="dense"
                      />
                      <TextField
                        style={{ padding: "0.2rem", width: "100%" }}
                        value={state.instagram}
                        id="standard-basic"
                        label="Instagram Link"
                        variant="standard"
                        name="instagram"
                        onChange={handleChange2}
                        margin="dense"
                      />
                      <TextField
                        style={{ padding: "0.2rem", width: "100%" }}
                        value={state.linkedIn}
                        id="standard-basic"
                        label="Linkedin Link"
                        variant="standard"
                        name="linkedIn"
                        onChange={handleChange2}
                        margin="dense"
                      />
                      <TextField
                        style={{ padding: "0.2rem", width: "100%" }}
                        value={state.resumeId}
                        id="standard-basic"
                        label="Resume Link"
                        variant="standard"
                        name="resumeId"
                        placeholder="My resume link is ..."
                        onChange={handleChange2}
                        margin="dense"
                      />

                      <label>Profile Image </label>
                      <div>
                      <input
                        name="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleChange2(e)}
                      ></input>
                      </div>

                      {avatarPreview && (
                        <img
                          alt="Profile Image"
                          src={avatarPreview}
                          width="100%"
                          padding="10px"
                          margin="10px"
                        ></img>
                      )}

                      <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmit}
                        style={{
                          padding: "0.5rem",
                          margin: "1rem 0rem",
                          width: "100%",
                        }}
                        disabled ={isLoading}
                      >
                        {isLoading&&
                        <CircularProgress size={10}
                        sx={{
                          color: "white",
                          marginRight: "0.5rem",
                        }}
                      />}
                        Save Profile
                      </button>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
          <div>
            {user.userBio}
            <br></br>
            <a style={{ color: "black" }} href={user.resumeId}>
              <FaLink /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* <div class="main-2">
        <div class="button-group">
          <ToggleButtonGroup
            // color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              style={{
                border: "none",
                background: "none",
                color: "#2cb1bc",
                fontWeight: "bold",
              }}
              value="research"
            >
              Research
            </ToggleButton>
            <ToggleButton
              style={{
                border: "none",
                background: "none",
                color: "#2cb1bc",
                fontWeight: "bold",
              }}
              value="projects"
            >
              Projects
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div> */}

    
    </Wrapper>
  );
};
