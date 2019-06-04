import React, { Component } from 'react';
import CartList from '../containers/CartList';

export default class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <CartList />
      </div>
    )
  }
}
