import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

import RootStoreProvider from './RootStoreProvider';
import BasePage from './components/pages/BasePage';

/*
 * BasePage is used to include Header, Footer etc.
 * With this we can skip header footer for any page to render directly.
 */
ReactDOM.render(
  <RootStoreProvider>
    <Switch>
      <Route exact path="/"
        render={routeProps => (<BasePage {...routeProps} pageName="Home" />)} />
      <Route path="/shopping-cart"
        render={routeProps => (<BasePage {...routeProps} pageName="ShoppingCart" />)} />
      <Route path="/product-detail/:productId"
        render={routeProps => (<BasePage {...routeProps} pageName="ProductDetailsPage" />)} />
      {/* <Route path="/sitemap.xml" component={Sitemap}/> */}
      <Route path="*"
        render={routeProps => (<BasePage {...routeProps} pageName="PageNotFound" />)} />
    </Switch>
  </RootStoreProvider>,
  document.getElementById('root')
);
