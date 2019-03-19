import React, { Component } from 'react';
import ProductListSummary from '../views/ProductListSummary';
import ProductDetailSummary from '../views/ProductDetailSummary';
import Pagination from '../views/Pagination';

export default class ProductList extends Component {
  render() {
    const productCount = this.props.products.length;
    const productListMarkup = this.props.products.map((product) => {
      return <ProductDetailSummary product={product} key={product.id} />;
    });
    return(
      <div className="container">
        <h3 className="center">Product List</h3>
        <ProductListSummary productCount={productCount} />
        {productListMarkup}
        <Pagination />
      </div>
    );
  }
}
