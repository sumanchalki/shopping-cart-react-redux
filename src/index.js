import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home';
import ShoppingCart from './components/pages/ShoppingCart';
import Header from './components/views/Header';
import NavContainer from './components/containers/NavContainer';
import Footer from './components/views/Footer';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
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
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
