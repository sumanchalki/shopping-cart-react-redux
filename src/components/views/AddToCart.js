import React, {Component} from 'react';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import $ from 'jquery';

export default class AddToCart extends Component {
  handleAddToCart = () => {
    $("html, body").animate({ scrollTop: 0 }, 300);
    $("#nav-view-cart-link").addClass('active');
    setTimeout(() => $("#nav-view-cart-link").removeClass('active'), 700);
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
