import React from 'react'
import { FormRow, ProfileIcon } from "../../component";
import Wrapper from "../../css/wrapper/Profile";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export const Profile = () => {
  const [alignment, setAlignment] = React.useState('research');
  let information;
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Wrapper>
      <div class="main">
        <div class="profile">
          {/* <image src="" alt="User Image" /> */}
        </div>
        <div class="user-info">
          <div class="about">
            <div>
            Cristiana Justin
            </div>
            <div>
              <button type="button" className="btn">
                Edit Profile
              </button>
            </div>
            

          </div>
          <div>
          A user is a person who utilizes a computer or network service. 
          A user often has a user account and is identified to the system by a username. 
          Other terms for username include login name, screenname, account name, nickname
           and handle, which is derived from the identical citizens band radio term. Wikipedia
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
            <ToggleButton style={{border: 'none', background: 'none', color: '#2cb1bc', fontWeight:'bold'}} value="bookmarks">Bookmarks</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      
      {
        alignment === "research" ? 
        (
          <div class="research">
            Research
          </div>
        ) : 
        (alignment === "projects") ? (
          <div class="projects">
            Projects
          </div>
        ) : (
          <div class="bookmarks">
            Bookmarks
          </div>
        )
      }
      
      
      
    </Wrapper>
  )
}
