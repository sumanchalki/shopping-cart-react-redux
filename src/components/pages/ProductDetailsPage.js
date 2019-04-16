import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import ProductDetails from '../containers/ProductDetails';
import { fetchProductDetails } from '../../lib/fetchProducts';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {productDetailObj: {}};
  }

  componentDidMount() {
    const { match: { params: {productId} } } = this.props; // this.props.match.params.productId
    fetchProductDetails(productId).then(response => {
      this.setState({productDetailObj: response[0]});
    });
  }

  render() {
    return(
      <AddToCartContext.Provider value={{action: this.props.addToCartAction}}>
        <div className="container main-container">
          <ProductDetails productDetails={this.state.productDetailObj} />
        </div>
      </AddToCartContext.Provider>
    )
  }
}

export default connect(null, actions)(ShoppingCart);
