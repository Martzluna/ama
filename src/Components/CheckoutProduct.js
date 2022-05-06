import React from "react";
import "../styles/CheckoutProduct.scss";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, title, image, price, removeFromBasket }) {
  return (
    <FlipMove>
      <div className="checkoutProduct">
        <img className="checkoutProductImage" src={image} alt="" />
        <div className="checkoutProductInfo">
          <p className="checkoutProductTile">{title}</p>
          <p className="checkoutProductPrice">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
