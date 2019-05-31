import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AddToCart from '../views/AddToCart';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import { fetchProductDetails } from '../../lib/fetchProducts';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {productDetails: {}};
  }

  componentDidMount() {
    const productId = this.props.productId; // this.props.match.params.productId
    fetchProductDetails(productId).then(response => {
      this.setState({productDetails: response[0]});
    });
  }

  // Passing AddToCartContext as it might be used at any deep level child.
  render() {
    return(
      <AddToCartContext.Provider value={{action: this.props.addToCartAction}}>
        <div>
          <h3 className="center">Product Details - {this.state.productDetails.Title}</h3>
          Details page of Product.
          <div className="product-box card mb-3">
            <div className="card-body">
              <div className="text-center">
                <img className="card-img-top" alt={this.state.productDetails.Title} src={this.state.productDetails.ImageUrl} />
              </div>
              <p className="card-text description">
                {this.state.productDetails.Description}
              </p>
              <p className="card-text"><b>Category:</b> {this.state.productDetails.Category}</p>
              <p className="card-text"><b>Made by:</b> {this.state.productDetails.Manufacturer}</p>
              <p className="card-text"><b>Organic:</b> {this.state.productDetails.Organic ? 'Yes' : 'No' }</p>
              <p className="card-text"><b>Price:</b> ${this.state.productDetails.Price}</p>

              <AddToCart product={this.state.productDetails} />
            </div>
          </div>
        </div>
      </AddToCartContext.Provider>
    );
  }
}

export default connect(null, actions)(ProductDetails);
