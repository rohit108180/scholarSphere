import React, {useState} from 'react'
import { Alert, FormRow, ProfileIcon } from "../../component";
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


// const researchItems = user.researchPapers.map((number) => {
//   return (
//       <ListItemButton component="a" href={number}>
//           <ListItemText primary={number} />
//       </ListItemButton>
//   )
// });


// const projectItems = user.projects.map((number) => {
//   return (
//       <ListItemButton component="a" href={number}>
//           <ListItemText primary={number} />
//       </ListItemButton>
//   )
// });





export const Profile = () => {

  const {user, showAlert, updateProfile} = useAppcontext();
  console.log(user);
  const [state, setState] = useState({...user})
  const [alignment, setAlignment] = React.useState('research');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange2 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(state);
    console.log(state);
  };


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
            <a style={{fontSize: '1.5rem', color: 'black'}} href={user.githubLink}> <FaGithub></FaGithub> </a>
            <a style={{fontSize: '1.5rem', color: '#C13584'}} href={user.intstagram}> <FaInstagram></FaInstagram> </a>
            <a style={{fontSize: '1.5rem', color: '#0072b1'}} href={user.linkedIn}> <FaLinkedin></FaLinkedin> </a>

            </div>
            <div>
              {/* <button type="button" className="btn">
                Edit Profile
              </button> */}
              <div>
                <Button onClick={handleOpen} className="btn">Edit Profile</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                      Edit your profile
                    </Typography>
                    {showAlert && <Alert/>}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <TextField style={{padding: '0.2rem', width: '50%'}}  value={state.name} id="standard-basic" label="First Name" variant="standard" name='name'onChange={handleChange2} dissabled={true}/>
                      <TextField style={{padding: '0.2rem', width: '50%'}}  value={state.lastname} id="standard-basic" label="Last Name" variant="standard" name='lastname'onChange={handleChange2}/>
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={state.userBio}  id="standard-basic" label="Bio" variant="standard" name='userBio'onChange={handleChange2}/>
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={state.githubLink}  id="standard-basic" label="Github Link" variant="standard" name = "githubLink" onChange={handleChange2}/>
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={state.instagram}  id="standard-basic" label="Instagram Link" variant="standard" name="instagram" onChange={handleChange2}/>
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={state.linkedIn}  id="standard-basic" label="Linkedin Link" variant="standard" name="linkedIn" onChange={handleChange2}/>
                      <TextField style={{padding: '0.2rem', width: '100%'}} value={state.resumeId}  id="standard-basic" label="Resume Link" variant="standard" name="resumeId" placeholder='My resume link is ...' onChange={handleChange2}/>

                      <button type='submit' className='btn' onClick={handleSubmit} style={{padding: '0.5rem',margin:"1rem 0rem", width: '100%'}}>Save Profile</button>
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

      
      {/* {
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
       */}
      
      
    </Wrapper>
  )
}
