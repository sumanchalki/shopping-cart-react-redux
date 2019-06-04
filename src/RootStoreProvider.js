import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

export default (props) => {
  // This to reuse Provider tag code. It can be reused by unit tests.
  return(
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}
