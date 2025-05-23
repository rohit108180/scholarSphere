import React, { Children } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BigSidebar, Navbar, SmallSidebar } from '../../component'
import { useAppcontext } from '../../context/appContext'
import Wrapper from '../../css/wrapper/SharedLayout'
import { LogoutButton } from '../Logout'

export const SharedLayer = ({children}) => {
  const {showSidebar}= useAppcontext()
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
         <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/>
            {children}
          </div>

        </div>
      </main>
    </Wrapper>
  )
}
