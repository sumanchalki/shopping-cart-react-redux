import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home';
import ShoppingCart from './components/pages/ShoppingCart';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import PageNotFound from './components/views/PageNotFound';
import Header from './components/views/Header';
import NavContainer from './components/containers/NavContainer';
import Footer from './components/views/Footer';
import store from './store';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

ReactDOM.render(
  /* TODO: <Provider store={createStore(reducers, initialState, applyMiddleWare())}> */
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <NavContainer />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
          <Route path="/product-detail/:productId" component={ProductDetailsPage}/>
          <Route path="*" component={PageNotFound} status={404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
