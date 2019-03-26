import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../views/NavBar';
import NavCartCount from '../views/NavCartCount';

class NavContainer extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavBar />
        <NavCartCount cartCount={this.props.cartCount} />
      </nav>
    )
  }
}

const mapStateToProps = state => {
  const cartCount = state.map(item => item.quantity).reduce((total, num) => (total + num), 0);
  return { cartCount }
}

export default connect(mapStateToProps)(NavContainer);
