import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/views/Header';
import Nav from './components/views/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
