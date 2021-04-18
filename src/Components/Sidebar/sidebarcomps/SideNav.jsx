import React, { Component } from 'react'
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export class SideNav extends Component {
  render() {
    return (

      // <ButtonToolbar className="custom-btn-toolbar">
      //       <LinkContainer to="/">
      //         <Button>Home</Button>
      //       </LinkContainer>
      //       <LinkContainer to="/about">
      //         <Button>About</Button>
      //       </LinkContainer>
      //       <LinkContainer to="/users">
      //         <Button>Users</Button>
      //       </LinkContainer>
      //     </ButtonToolbar>
      <ul>
        <li className="active nav-item">
          <LinkContainer to='/'>
            <button className='btn bg-primary'>Dashboard</button>
          </LinkContainer>
        </li>
        <LinkContainer to='/About'>
          <button className='btn bg-primary'>About</button>
        </LinkContainer>
      </ul>
    )
  }
}

export default SideNav
