import React from 'react'
import { useAppcontext } from '../context/appContext'
import {useNavigate} from 'react-router-dom'
export const LogoutButton =() => {

      const {logoutUser} =useAppcontext()
      const navigate = useNavigate();

      const handleLogout = () =>{
          logoutUser();
          setTimeout(() => {
            navigate('/register');
          }, 1000);
      }


  return (
 
      <button onClick={handleLogout}>logout</button>
    
  )
}
