import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../views/NavBar';
import NavCartCount from '../views/NavCartCount';

class NavContainer extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavBar />
        <NavCartCount cart={this.props.cart} />
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavContainer);
