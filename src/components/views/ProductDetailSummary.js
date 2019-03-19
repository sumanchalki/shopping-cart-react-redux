import React from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div className="col-6 col-sm-4" key={props.key}>

      <div className="product-box">
        <h3 className="prod-title"><Link to={"/product-detail/" + props.product.Id}>{props.product.Title}</Link></h3>
        <Link to={"/product-detail/" + props.product.Id}><img className="rounded mx-auto d-block" src={props.product.ImageUrl} /></Link>
        <div className="prod-details">
          <p className="description"> {props.product.Description}</p>
          <p className="product-prop"><b>Category:</b> {props.product.Category}</p>
          <p className="product-prop"><b>Made by:</b> {props.product.Manufacturer}</p>
          <p className="product-prop"><b>Organic:</b> {props.product.Organic ? 'Yes' : 'No' }</p>
          <p className="product-prop"><b>Price:</b> {props.product.Price}</p>
        </div>
      <AddToCart />
    </div>
    </div>
  );
}
