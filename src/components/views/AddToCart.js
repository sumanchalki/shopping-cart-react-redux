import React, {Component} from 'react';
import { AddToCartContext } from '../../contexts/AddToCartContext';

export default class AddToCart extends Component {
  render() {
    return(
      <div className="add-cart-container">
        <button type="button" className="btn btn-primary"
          onClick={() => this.context.action(this.props.product)}>Add to Cart</button>
      </div>
    );
  }
}

AddToCart.contextType = AddToCartContext;
