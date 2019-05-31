import React, { Component } from 'react';
import ProductList from '../containers/ProductList';

export default class Home extends Component {
  render() {
    return(
      <div className="container main-container">
        <ProductList />
      </div>
    );
  }
}
