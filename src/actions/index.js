import * as types from './action-types';

export function updateCartAction(cartValue) {
  return {
    type: types.UPDATE_CART,
    payload: cartValue
  };
}
