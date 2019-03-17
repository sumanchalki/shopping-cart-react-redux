import { combineReducers } from 'redux';

// Reducers
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

// Combine Reducers
export default combineReducers({
  cart: cartReducer,
  products: productsReducer
});
