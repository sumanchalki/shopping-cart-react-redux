import React from 'react';

export default (props) => {
  return(
    <div className="input-group cart-form-input-group">
      <input type="number" className="form-control"
        onChange={(e) => props.handleChangeCartQuantity(e, props.product.Id)}
        value={props.cartFormElement.quantity} />
      <button type="button" className="btn btn-outline-danger" value={props.product.Id}>X</button>
    </div>
  );
}
