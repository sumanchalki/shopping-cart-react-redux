import React, { Component } from 'react';
import CartItem from '../views/CartItem';
import CartTotal from '../views/CartTotal';

export default class Home extends Component {
  render() {
    return(
    <div className="container">
      Your Cart:
      <CartItem />
      <CartTotal />
    </div>
    )
  }
}
