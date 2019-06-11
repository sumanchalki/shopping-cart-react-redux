import * as types from '../actions/action-types';

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      const allProducts = action.payload;
      return { ...state, ...{ allProducts } };
    case types.FETCH_PRODUCT_DETAILS:
      const productDetails = action.payload[0];
      return { ...state, ...{ productDetails } };
    default:
      return state;
  }
}

export default productsReducer;
