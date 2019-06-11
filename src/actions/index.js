import * as types from './action-types';
import { fetchProducts, fetchProductDetails } from '../lib/fetchProducts';

export function addToCartAction(product) {
  return {
    type: types.ADD_TO_CART,
    payload: { Id: product.Id, Title: product.Title, Price: product.Price }
  };
}

export function removeFromCartAction(productId) {
  return {
    type: types.REMOVE_FROM_CART,
    productId: productId
  };
}

export function updateCartAction(payload) {
  return {
    type: types.UPDATE_CART,
    payload
  };
}

export function getProducts(payload) {
  return {
    type: types.FETCH_PRODUCTS,
    payload: fetchProducts()
  };
}

export function getProductDetails(productId) {
  return {
    type: types.FETCH_PRODUCT_DETAILS,
    payload: fetchProductDetails(productId)
  };
}
