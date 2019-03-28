import React, { Component } from 'react';
import AddToCart from '../views/AddToCart';

export default class ProductDetails extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        Details page of Product.
        <AddToCart />
      </div>
    );
  }
}
