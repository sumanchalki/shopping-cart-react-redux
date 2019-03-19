import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import ProductDetails from '../views/ProductDetails';

class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <h3 className="center">Product Details</h3>
        <ProductDetails />
      </div>
    )
  }
}

export default connect(null, actions)(ShoppingCart);
