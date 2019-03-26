import React from 'react';

export default (props) => 
  <tbody className="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Subtotal</th>
      <th scope="col">${props.cartCount.cartTotal}</th>
      <th scope="col">{props.cartCount.cartItemCount} items</th>
    </tr>
  </tbody>
