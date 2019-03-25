import React from 'react';

export default (props) => {
  return(
    <div>
      <button type="button" className="btn btn-secondary">Cart ({props.cart.length})</button>
    </div>
  );
}
