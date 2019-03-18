import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';

class ShoppingCart extends Component {
  render() {
    return(
      <div className="container main-container">
        <h3 className="center">Product Details</h3>
        <div className="box">
            Details of the product.
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ShoppingCart);
