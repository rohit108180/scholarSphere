import React, {useState} from 'react'
import { FormRow, ProfileIcon } from "../../component";
import Wrapper from "../../css/wrapper/Profile";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FaGithub, FaInstagram, FaLinkedin, FaLink } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useAppcontext } from '../../context/appContext';



const user = {
  name: "First Name",
  email: "demo@gmail.com",
  password: "",
  lastname : "Last Name",
  location: "",
  profilePicture: "https://avatars.githubusercontent.com/u/71789479?v=4",
  role: "Student",
  projects: ["P1", "P1", "P2"],
  researchPapers: ["R1" , "R2", "R3"],
  socialLinks : {
    githubLink: "githum.com",
    googleScholarProfileLink: "",
    linkedIn :"linkedin.in",
    intstagram : "instagram.com"
  },
  resumeId:"",
  userBio: "I am a 3rd yr undergrad from NSUT Delhi.",
  skillSet:["", "", ""],  
  accomplishments: [{
      title: "",
      description: "",
      date: ""
  }, {
    title: "",
    description: "",
    date: ""
  }], 
}




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#f0f4f8',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};


const researchItems = user.researchPapers.map((number) => {
  return (
      <ListItemButton component="a" href={number}>
          <ListItemText primary={number} />
      </ListItemButton>
  )
});


const projectItems = user.projects.map((number) => {
  return (
      <ListItemButton component="a" href={number}>
          <ListItemText primary={number} />
      </ListItemButton>
  )
});





export const Profile = () => {

  const {user} = useAppcontext();
  const [alignment, setAlignment] = React.useState('research');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  let information;



  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Wrapper>
      <div class="main">
        <div class="profile">
          <img class="user-image" src={user.profilePicture} alt={user.name}/>
        </div>
        <div class="user-info">
          <div class="about">
            <div>
            {user.name} {user.lastname} &nbsp;&nbsp;&nbsp; <span style={{color:'grey'}}>({user.role})</span>
            <br></br>
            <span >Email: <a style={{color: '#0072b1'}} href={`mailto:{user.email}`}>{user.email}</a></span>
            
            <br></br>
            <a style={{fontSize: '1.5rem', color: 'black'}} href={user.socialLinks.githubLink}> <FaGithub></FaGithub> </a>
            <a style={{fontSize: '1.5rem', color: '#C13584'}} href={user.socialLinks.intstagram}> <FaInstagram></FaInstagram> </a>
            <a style={{fontSize: '1.5rem', color: '#0072b1'}} href={user.socialLinks.linkedIn}> <FaLinkedin></FaLinkedin> </a>

            </div>
            <div>
              {/* <button type="button" className="btn">
                Edit Profile
              </button> */}
              <div>
                <Button onClick={handleOpen}>Edit Profile</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Edit your profile
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <TextField style={{padding: '0.2rem', width: '50%'}}  value={user.name} id="standard-basic" label="First Name" variant="standard" />
                      <TextField style={{padding: '0.2rem', width: '50%'}}  value={user.lastname} id="standard-basic" label="Last Name" variant="standard" />
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={user.userBio}  id="standard-basic" label="Bio" variant="standard" />
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={user.socialLinks.githubLink}  id="standard-basic" label="Github Link" variant="standard" />
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={user.socialLinks.intstagram}  id="standard-basic" label="Instagram Link" variant="standard" />
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={user.socialLinks.linkedIn}  id="standard-basic" label="Linkedin Link" variant="standard" />
                    </Typography>
                  </Box>
                </Modal>
              </div>


            </div>
            

          </div>
          <div>
          {user.userBio}
          <br></br>
          <a style={{color: 'black'}} href={user.resumeId}><FaLink/> Resume</a>
          </div>
        </div>
      </div>

      <div class="main-2">
        <div class="button-group">
          <ToggleButtonGroup
            // color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton style={{border: 'none', background: 'none', color: '#2cb1bc', fontWeight:'bold'}} value="research">Research</ToggleButton>
            <ToggleButton style={{border: 'none', background: 'none', color: '#2cb1bc', fontWeight:'bold'}} value="projects">Projects</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      
      {
        alignment === "research" ? 
        (
          <div class="research">
            <List>{researchItems}</List>
          </div>
        ) : (
          <div class="projects">
          <List>{projectItems}</List>
          </div>
        )
      }
      
      
      
    </Wrapper>
  )
}
