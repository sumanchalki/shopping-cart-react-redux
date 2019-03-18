import React, { Component } from 'react';
import ProductListSummary from '../views/ProductListSummary';
import ProductDetailSummary from '../views/ProductDetailSummary';
import Pagination from '../views/Pagination';

export default class ProductList extends Component {
  render() {
    return(
      <div className="container">
        <h3 className="center">Product List</h3>
        <ProductListSummary />
        <ProductDetailSummary />
        <Pagination />
      </div>
    );
  }
}
