import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProductList from '../containers/ProductList';
import { fetchProducts } from '../middleware/fetchProducts';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount() {
    fetchProducts().then(response => {
      this.setState({products: response});
    });
  }

  render() {
    return(
      <div className="container main-container">
        <div className="box">
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
