import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import ProductList from '../containers/ProductList';
import { fetchProducts } from '../../lib/fetchProducts';

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
    // Passing AddToCartContext as it might be used at any deep level child.
    return(
      <AddToCartContext.Provider value={{action: this.props.addToCartAction}}>
        <div className="container main-container">
          <div className="box">
            <ProductList products={this.state.products} />
          </div>
        </div>
      </AddToCartContext.Provider>
    );
  }
}

export default connect(null, actions)(Home);
