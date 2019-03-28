import React, { Component } from 'react';
import { connect } from 'react-redux'

import { countCart } from '../../lib/cartLib';
import * as actions from '../../actions';
import CartList from '../containers/CartList';
import { highLightCartButton } from '../../lib/cartLib';

class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <CartList cartDetails={{cart: this.props.cart, cartCount: this.props.cartCount}}
          removeFromCart={this.props.removeFromCart}
          handleUpdateCart={this.props.updateCart} />
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
    removeFromCart: productId => {
      highLightCartButton();
      return dispatch(actions.removeFromCartAction(productId))
    },

    updateCart: (e, cartForm) => {
      e.preventDefault();
      highLightCartButton();
      return dispatch(actions.updateCartAction(cartForm));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
