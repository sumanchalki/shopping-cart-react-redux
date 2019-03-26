import * as types from '../actions/action-types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let isItemExists = false; 
      const newState = state.map((item) => {
        if (item.Id === action.payload.Id) {
          item.quantity += 1;
          isItemExists = true;
        }
        return item;
      });
      if (isItemExists) {
        return newState;
      }
      return [...state, {...action.payload, quantity: 1}];

    case types.UPDATE_CART:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default cartReducer;
