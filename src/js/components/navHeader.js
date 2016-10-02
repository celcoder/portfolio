import React, {Component, PropTypes} from 'react';
import { IndexLink, Link } from "react-router";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';


export default class NavHeader extends Component {
  render() {
    return (  
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Home</a>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Portfolio</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Blogs</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Contact</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}