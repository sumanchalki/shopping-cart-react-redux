import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProductList from '../containers/ProductList';

class Home extends Component {
  render() {
    return(
      <div className="container main-container">
        <div className="box">
          <ProductList />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
