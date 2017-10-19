import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <Navbar inverse collapseOnSelect className='main-nav'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">HARTT OF COLOR</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">SERVICES</NavItem>
            <NavItem eventKey={2} href="#">HOW IT WORKS</NavItem>
            <NavItem eventKey={3} href="#">INSPIRATION</NavItem>
          </Nav>
          <Nav pullRight>
            <li role="presentation" className="book-now">
              <a style={{color: 'white'}} className="book-now-link" href="#" role="button">BOOK NOW</a>
            </li>
            <NavItem eventKey={1} href="#">SIGN IN</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
