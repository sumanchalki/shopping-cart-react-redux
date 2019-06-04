import { createStore } from 'redux';
import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

let store;

export default (initialState, env = 'real') => {
  switch (env) {
    case 'real':
    default:
      const persistedState = loadState();
      /* TODO: const store = createStore(rootReducer, persistedState, applyMiddleWare()); */
      store = createStore(rootReducer, persistedState);

      store.subscribe(
        // Throttle: invokes a function at most once per every 1000 milliseconds.
        throttle(() => {
          saveState({
            cart: store.getState().cart
          });
        }, 1000)
      );
      break;
    case 'test':
      store = createStore(rootReducer, initialState);
      break;
  }
  return store;
}
