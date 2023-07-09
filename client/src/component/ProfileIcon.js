import React from 'react'
import Wrapper from '../css/wrapper/ProfileIcon'
import {convertToInitials} from '../utils/stringUtils'
import { FaUser } from 'react-icons/fa'
// import img from '../assets/images/profile.'

export const ProfileIcon = (props) => {
  const {avatar, name } = props
  return (
    <Wrapper>
      <span>
      {
        avatar?
        
      <img src={avatar}></img>
      :
      name?
         convertToInitials(name):<FaUser/>
         }
          </span>
        
    </Wrapper>
  )
}
