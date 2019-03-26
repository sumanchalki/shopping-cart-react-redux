import React, { Component } from 'react';
import { connect } from 'react-redux'

import { countCart } from '../../lib/cartLib';
import * as actions from '../../actions';
import CartList from '../containers/CartList';

class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <CartList cartDetails={{cart: this.props.cart, cartCount: this.props.cartCount}} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const cartCount = countCart(state);
  return {cart: state.cart, cartCount}
}

export default connect(mapStateToProps, actions)(ShoppingCart);
