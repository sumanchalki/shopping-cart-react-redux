import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/views/Header';
import Nav from './components/views/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
