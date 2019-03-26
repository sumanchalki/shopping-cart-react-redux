import React from 'react';

export default (props) => {
  return(
    <div>
      <button id="nav-view-cart-button" type="button" className="btn btn-secondary">Cart ({ props.cartCount })</button>
    </div>
  );
}
