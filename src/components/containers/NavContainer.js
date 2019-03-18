import React, { Component } from 'react';
import NavBar from '../views/NavBar';
import NavCartCount from '../views/NavCartCount';

export default class NavContainer extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavBar />
        <NavCartCount />
      </nav>
    )
  }
}
