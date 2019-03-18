import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import CartList from '../containers/CartList';

class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <h3 className="center">Shopping Cart</h3>
        <CartList />
      </div>
    )
  }
}

export default connect(null, actions)(ShoppingCart);
