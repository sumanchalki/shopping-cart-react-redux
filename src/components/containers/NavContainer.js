import React, { Component } from 'react';
import { connect } from 'react-redux';

import { countCart } from '../../lib/cartLib';
import NavBar from '../views/NavBar';
import NavCartCount from '../views/NavCartCount';

class NavContainer extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavBar />
        <NavCartCount cartItemCount={this.props.cartItemCount} />
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return countCart(state);
}

export default connect(mapStateToProps)(NavContainer);
