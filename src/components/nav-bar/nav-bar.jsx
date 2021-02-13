import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import './nav-bar.styles.scss'

const authenticatedOptions = (
  <Fragment>
    <Link to="/home" className='navbar'>home</Link>
    <Link to="/sign-out" className='navbar'>Sign Out</Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Link to="/sign-up" className='navbar-link'>Sign Up</Link>
    <Link to="/sign-in" className='navbar-link'>Sign In</Link>
  </Fragment>
)

const NavBar = ({ user }) => {
  return (
    <Navbar className='navbar' expand="md">
    <Link to="/home" className='navbar-link'>a hike from boston.</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
