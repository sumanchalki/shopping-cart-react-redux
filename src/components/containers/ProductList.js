import React, { Component } from 'react';
import ProductListSummary from '../views/ProductListSummary';
import ProductDetailSummary from '../views/ProductDetailSummary';

import Pagination from '../helpers/Pagination';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: 23
    };
  }

  getPagedData = () => {
    const currentPageItemStart = (this.state.currentPage - 1) * this.state.perPage;
    const currentPageItemEnd = currentPageItemStart + this.state.perPage;
    return [currentPageItemStart, currentPageItemEnd];
  }

  render() {
    const totalProductCount = this.props.products.length;
    const [currentPageItemStart, currentPageItemEnd] = this.getPagedData();
    const currentPageProducts = this.props.products.slice(currentPageItemStart, currentPageItemEnd);
    //const currentPageProductCount = currentPageProducts.length;
    const productListMarkup = currentPageProducts.map(product => {
      return <ProductDetailSummary product={product} key={product.Id} />;
    });

    return(
      <div className="container">
        <h3 className="center">Product List</h3>

        <ProductListSummary currentPageItemStart={currentPageItemStart} currentPageItemEnd={currentPageItemEnd} totalProductCount={totalProductCount} />
        <div className="row">
          {productListMarkup}
        </div>
        <Pagination currentPage={this.state.currentPage} perPage={this.state.perPage} totalProductCount={totalProductCount} />
      </div>
    );
  }
}
