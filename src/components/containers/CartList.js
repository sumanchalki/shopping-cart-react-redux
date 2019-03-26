import React from 'react';
import CartItem from '../views/CartItem';
import CartTotal from '../views/CartTotal';

export default (props) => {
  const cartItemsMarkUp = props.cartDetails.cart.map((product, index) =>
    <CartItem product={product} key={product.Id} counter={index + 1} />
  );
  return(
    <div className="container">
      <h3 className="center">My Cart ({props.cartDetails.cartCount.cartItemCount}):</h3>
      <form className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItemsMarkUp}
          </tbody>
          <CartTotal cartCount={props.cartDetails.cartCount} />
        </table>
      </form>
    </div>
  );
}
