import React, { Component } from 'react';
import { connect } from 'react-redux'

import { countCart } from '../../lib/cartLib';
import * as actions from '../../actions';
import CartList from '../containers/CartList';

class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <CartList cartDetails={{cart: this.props.cart, cartCount: this.props.cartCount}}
          removeFromCart={this.props.removeFromCart} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const cartCount = countCart(state);
  return {cart: state.cart, cartCount}
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: productId => dispatch(actions.removeFromCartAction(productId)),

    updateCart: (e) => {
      return dispatch(actions.updateCartAction(e.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
