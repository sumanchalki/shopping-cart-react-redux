import React from 'react';
import CartUpdateForm from './CartUpdateForm';

export default (props) => {
  return(
    <tr className={"row-" + props.product.Id}
      onClick={e => props.handleClickRow(props.product.Id)}>

      <th scope="row">{ props.counter }</th>
      <td>{ props.product.Title }</td>
      <td>${ props.product.Price }</td>
      <td>
        <CartUpdateForm product={props.product} cartFormElement={props.cartFormElement}
          handleChangeCartQuantity={props.handleChangeCartQuantity} />
      </td>
    </tr>
  );
}
