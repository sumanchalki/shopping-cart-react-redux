import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

export default createStore(cartReducer);
