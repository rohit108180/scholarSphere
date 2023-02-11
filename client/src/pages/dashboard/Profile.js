import React from 'react'
import { FormRow, ProfileIcon } from "../../component";
import Wrapper from "../../css/wrapper/Profile";



export const Profile = () => {
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
          <button class="button">
            Research
          </button>
          <button class="button">
            Projects
          </button>
        </div>
      </div>
      <div class="research">
        research
      </div>
      <div class="projects"  style={{display: 'none'}}>
        projects
      </div>
      <div class="bookmarks"  style={{display: 'none'}}>
        bookmarks
      </div>
    </Wrapper>
  )
}
