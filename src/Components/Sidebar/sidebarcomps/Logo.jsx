import React, { Component } from 'react'
import logo from './logo.png'

export class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <img src={logo} alt="logo"/>
        <h2>DIRTBAGS</h2>
      </div>
      
    )
  }
}

export default Logo
