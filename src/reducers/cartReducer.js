import * as types from '../actions/action-types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state, action.payload];

    case types.UPDATE_CART:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default cartReducer;
