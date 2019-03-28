import React, {Component} from 'react';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import { highLightCartButton } from '../../lib/cartLib';

export default class AddToCart extends Component {
  handleAddToCart = () => {
    highLightCartButton();
    this.context.action(this.props.product);
  }
  render() {
    return(
      <div className="add-cart-container">
        <button type="button" className="btn btn-primary"
          onClick={this.handleAddToCart}>Add to Cart</button>
      </div>
    );
  }
}

AddToCart.contextType = AddToCartContext;
