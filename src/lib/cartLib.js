import $ from 'jquery';

export const countCart = cart => {
  const cartItemCount = cart.map(item => item.quantity).reduce((total, num) => (total + num), 0);
  const cartTotal = cart.map(item => item.Price * item.quantity).reduce((total, num) => (total + num), 0);
  return { cartItemCount, cartTotal }
}

export const highLightCartButton = () => {
  $("html, body").animate({ scrollTop: 0 }, 300);
  $("#nav-view-cart-link").addClass('active');
  setTimeout(() => $("#nav-view-cart-link").removeClass('active'), 700);
}
