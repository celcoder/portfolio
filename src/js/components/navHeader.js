import React, {Component, PropTypes} from 'react';
import { IndexLink, Link } from "react-router";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';


export default class NavHeader extends Component {
  render() {
    return (  
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Portfolio Page</a>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Dashboard</NavItem>
          <NavItem eventKey={2} href="#">Contact</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}