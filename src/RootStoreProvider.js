import React from 'react';
import { Provider } from 'react-redux';
import getStore from './store';

export default ({ children, initialState = {}, env = '' }) => {
  const store = getStore(initialState, env);
  // This to reuse Provider tag code. It can be reused by unit tests.
  return(
    <Provider store={store}>
      {children}
    </Provider>
  );
}
