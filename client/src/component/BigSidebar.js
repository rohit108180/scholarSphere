import React from 'react'
import { useAppcontext } from '../context/appContext'
import Wrapper from '../css/wrapper/BigSidebar'
import { Logo } from './Logo';
import { Navlinks } from './Navlinks';

export const BigSidebar = () => {
  const {showSidebar} = useAppcontext();
  return (
    <Wrapper>
    <div
    className={ showSidebar? "sidebar-container  " : "sidebar-container show-sidebar"}>
    <div className="content">
      <header>
        <Logo/>
      </header>
      <Navlinks/>
    </div>

    </div>
    </Wrapper>
  )
}
