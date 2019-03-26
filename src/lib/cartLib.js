export const countCart = state => {
  const cartItemCount = state.cart.map(item => item.quantity).reduce((total, num) => (total + num), 0);
  const cartTotal = state.cart.map(item => item.Price).reduce((total, num) => (total + num), 0);
  return { cartItemCount, cartTotal }
}
