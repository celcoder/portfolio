import React, {Component, PropTypes} from 'react';
import { IndexLink, Link } from "react-router";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';


const navBarContent = {
  dashboard: 'DASHBOARD',
  contacts: 'CONTACTS',
  resume: 'RESUME'
}

export default class NavHeader extends Component {
  render() {
    const navStyle = {
      height: 80,
      paddingTop: 20,
    }
    
    const {dashboard, contacts, resume} = navBarContent;
    
    return (  
      <Navbar style={navStyle} className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Chang Ethan Lee</a>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">{dashboard}</NavItem>
          <NavItem eventKey={2} href="#">{contacts}</NavItem>
          <NavItem eventKey={3} href="#">{resume}</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}