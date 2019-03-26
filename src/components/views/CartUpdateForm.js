import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return(
    <div>
      <input type="number" className="form-control" value={props.product.quantity}></input>
    </div>
  );
}
