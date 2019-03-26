import React from 'react';
import CartUpdateForm from './CartUpdateForm';

export default (props) => {
  return(
    <tr className={props.counter === 2 ? "table-active" : ""}>
      <th scope="row">{ props.counter }</th>
      <td>{ props.product.Title }</td>
      <td>${ props.product.Price }</td>
      <td><CartUpdateForm product={ props.product } /></td>
    </tr>
  );
}
