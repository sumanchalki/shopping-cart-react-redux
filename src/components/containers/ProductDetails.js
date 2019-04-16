import React, { Component } from 'react';
import AddToCart from '../views/AddToCart';

export default class ProductDetails extends Component {
  render() {
    console.log(this.props.productDetails);
    return(
      <div>
        <h3 className="center">Product Details - {this.props.productDetails.Title}</h3>
        Details page of Product.
        <div className="product-box card mb-3">
          <div className="card-body">
            <div className="text-center">
              <img className="card-img-top" alt={this.props.productDetails.Title} src={this.props.productDetails.ImageUrl} />
            </div>
            <p className="card-text description">
              {this.props.productDetails.Description}
            </p>
            <p className="card-text"><b>Category:</b> {this.props.productDetails.Category}</p>
            <p className="card-text"><b>Made by:</b> {this.props.productDetails.Manufacturer}</p>
            <p className="card-text"><b>Organic:</b> {this.props.productDetails.Organic ? 'Yes' : 'No' }</p>
            <p className="card-text"><b>Price:</b> ${this.props.productDetails.Price}</p>

            <AddToCart product={this.props.productDetails} />
          </div>
        </div>
      </div>
    );
  }
}
