import React, { Component } from 'react';
//import { findDOMNode } from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';

import CartItem from '../views/CartItem';
import CartTotal from '../views/CartTotal';
import $ from 'jquery';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class CartList extends Component {
  constructor(props) {
    super(props);

    const cartForm = {};
    this.props.cartDetails.cart.map((product, index) =>
      cartForm[product.Id] = {Id: product.Id, quantity: product.quantity}
    );
    this.state = {cartForm};

    this.tableRef = React.createRef();
  }

  handleChangeCartQuantity = (e, productId) => {
    const cartForm = Object.assign({}, this.state.cartForm);
    cartForm[productId].quantity = parseInt(e.target.value);
    this.setState(cartForm);
  }

  // Focus the clicked row.
  handleClickRow = (productId) => {
    //const el = findDOMNode(this.tableRef.current);
    $(this.tableRef.current).find('tr').each((i, el) => {
      $(el).removeClass('table-active');
    });
    $(this.tableRef.current).find('tr.row-' + productId).addClass('table-active');
  }

  handleRemoveCartItem = (product) => {
    confirmAlert({
      title: 'Remove "' + product.Title + '"',
      message: 'Are you sure want to remove this product from your cart?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.removeFromCart(product.Id)
        },
        {
          label: 'No',
          onClick: () => false
        }
      ]
    });
  }

  render() {
    const cartItemsMarkUp = this.props.cartDetails.cart.map((product, index) =>
      <CartItem product={product} key={product.Id}
        cartFormElement={this.state.cartForm[product.Id]}
        handleClickRow={this.handleClickRow}
        handleRemoveCartItem={this.handleRemoveCartItem}
        counter={index + 1} handleChangeCartQuantity={this.handleChangeCartQuantity} />
    );
    return(
      <div className="container">
        <h3 className="center">My Cart ({this.props.cartDetails.cartCount.cartItemCount}):</h3>
        {this.props.cartDetails.cartCount.cartItemCount > 0
          ?
          <form onSubmit={e => this.props.handleUpdateCart(e, this.state.cartForm)}>
            <div className="table-responsive">
              <table className="table table-hover" ref={this.tableRef}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItemsMarkUp}
                </tbody>
                <CartTotal cartCount={this.props.cartDetails.cartCount} />
              </table>
            </div>

            <div className="row justify-content-end container-proceed-cart">
              <div className="col-lg-3 col-md-5 col-sm-6 col-xs-8">
                <div className="btn-group" role="group" aria-label="Update Cart">
                  <button type="submit" className="btn btn-primary">Update Cart</button>
                </div>
                <div className="btn-group" role="group" aria-label="Checkout">
                  <button type="button" className="btn btn-primary">Checkout</button>
                </div>
              </div>
            </div>
          </form>
          :
          <h4 className="row justify-content-center cart-empty">Your Cart is empty!</h4>
        }

      </div>
    );
  }
}
