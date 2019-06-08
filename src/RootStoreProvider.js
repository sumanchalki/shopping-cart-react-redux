import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import getStore from './store';

export default ({ children, initialState = {}, env = '' }) => {
  const store = getStore(initialState, env);
  // This to reuse Provider tag code and Router. Links need to be wrapped by <Router>.
  // It can be reused by unit tests.
  return(
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  );
}
