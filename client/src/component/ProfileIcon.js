import React from 'react'
import Wrapper from '../css/wrapper/ProfileIcon'
import {convertToInitials} from '../utils/stringUtils'
import { FaUser } from 'react-icons/fa'
// import img from '../assets/images/profile.'

import Avatar from '@mui/material/Avatar';

export const ProfileIcon = (props) => {
  const {avatar, name } = props
  return (
    <Wrapper>
      <Avatar>
      {
        avatar?
        
      <img src={avatar}></img>
      :
      name?
         convertToInitials(name):<FaUser/>
         }
          </Avatar>
        
    </Wrapper>
  )
}
