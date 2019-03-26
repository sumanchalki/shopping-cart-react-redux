import * as types from './action-types';

export function addToCartAction(product) {
  return {
    type: types.ADD_TO_CART,
    payload: { Id: product.Id, Title: product.Title, Price: product.Price }
  };
}

export function updateCartAction(cartValue) {
  return {
    type: types.UPDATE_CART,
    payload: cartValue
  };
}
