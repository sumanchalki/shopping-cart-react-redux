import { createStore } from 'redux';
import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  // Throttle: invokes a function at most once per every 1000 milliseconds.
  throttle(() => {
    saveState({
      cart: store.getState().cart
    });
  }, 1000)
);

export default store;
