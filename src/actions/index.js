import * as types from './action-types';

export function addToCartAction(product) {
  console.log(product);
  return {
    type: types.ADD_TO_CART,
    payload: product
  };
}

export function updateCartAction(cartValue) {
  return {
    type: types.UPDATE_CART,
    payload: cartValue
  };
}
