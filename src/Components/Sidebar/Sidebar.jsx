import React, { Component } from 'react'
import SideNav from './sidebarcomps/SideNav'
import Logo from './sidebarcomps/Logo'

export class Sidebar extends Component {

  
  render() {
    return (
      <div className='sideBar' >
        <Logo />
        
        <SideNav />
      </div>
    )
  }
}

export default Sidebar
